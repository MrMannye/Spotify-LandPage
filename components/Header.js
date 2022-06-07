import DashboardIcon from '@material-ui/icons/Dashboard';
import CropLandscapeIcon from '@material-ui/icons/CropLandscape';
import AppsIcon from '@material-ui/icons/Apps';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import {useRouter} from 'next/router'
import {signOut} from '../hooks/loginSlice'

const Header = () => {

    const user = useSelector((state) => state.login.user);
    const admin = useSelector((state) => state.login.admin);
    const id = useSelector((state) => state.login.id);
    const router = useRouter();
    const dispatch = useDispatch();
    console.log(user)

    const handleDashBoard = () => {
        if(!user){
            router.push('/login');
        }else{
            if(admin !== 1){
                router.push('/musics');
            }else{
                router.push('/dashboard');
            }
        }
    }

    return (
        <div className="flex shadow-sm items-center px-8 p-4 bg-white w-screen justify-between fixed top-0 z-10">
            <div className="flex items-center space-x-4">
                <p className="text-xl text-gray-800 font-semibold">Songs</p>
                <p className="text-xl text-gray-800 ">|</p>
                <p className="text-gray-800 text-lg">Dash</p>
            </div>
            
            <div className="flex space-x-3">
                <CropLandscapeIcon className="text-gray-800" />
                <DashboardIcon onClick={handleDashBoard} className="text-gray-800 cursor-pointer" />

            </div>
            <div className="flex space-x-4 text-gray-800">
                <AppsIcon />
                <ExitToAppIcon className='cursor-pointer' onClick={() => {dispatch(signOut()); router.push('/')} } />
                {user ? 
                    <Link href={admin === 1 ? '/dashboard' : `/users/${id}`}>
                        <p className="text-gray-600 cursor-pointer font-semibold">{user}</p>
                    </Link>
                :
                    <Link href='/login'>
                        <p className="text-gray-600 cursor-pointer font-semibold">Login</p>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Header
