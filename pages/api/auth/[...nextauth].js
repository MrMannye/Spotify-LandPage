import NextAuth from "next-auth"
import SpotifyProvider from 'next-auth/providers/spotify'
import spotifyAPI, {LOGIN_URL} from '../../../lib/spotify'


async function refreshAccessToken(token){
    try{
        spotifyAPI.setAccessToken(token.accessToken);
        spotifyAPI.setRefreshToken(token.refreshToken);

        const { body: refreshedToken } = await spotifyAPI.refreshAccessToken();
        console.log(refreshedToken);

        return {
            ...token,
            accessToken: refreshedToken.access_token,
            accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
            refreshToken: refreshedToken.refresh_token ?? token.refreshToken
        }

    } catch{
        console.log(error.message);
        return {...token, error: "RefreshAccessToken Error"}
    }
}


export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        SpotifyProvider({
            clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
            authorization: LOGIN_URL
        }),
        // ...add more providers here
    ],
    secret: process.env.JWT_TOKEN,
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async jwt({token, account, user}){
            // if initial signIn
            if(account && user){
                return {
                    ...token,
                    accessToken: account.access_token,
                    refreshToken: account.refresh_token,
                    username: account.providerAccountId,
                    accessTokenExpires: account.expires_at * 1000
                }
            }
            // Return de access token if not expired
            if(Date.now() < token.accessTokenExpires ){
                return token;
            }
            // if access token expired
            console.log("ACCESS TOKEN EXPIRED")
            return await refreshAccessToken(token)
        },

        async session({session, token}){
            session.user.accessToken = token.accessToken
            session.user.refreshToken = token.refreshToken
            session.user.username = token.username

            return session;
        }
    }
})