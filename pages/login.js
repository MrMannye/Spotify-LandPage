import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Axios from 'axios'
import { useDispatch } from 'react-redux'
import {signIn} from '../hooks/loginSlice'

export default function Login() {
    
    const router = useRouter();
    const dispatch = useDispatch();

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = (data) => { 
        console.log(data)
        Axios.post(`https://backend-nest-bdd.herokuapp.com/users/loginUser`,{
            email: data.email,
            password: data.password,
        }).then((response) => {
            console.log(response)
            if(response.data === "Usuario no existente"){
                alert("Usuario y/o contraseña incorrecta")
            }else{
                console.log(response)
                dispatch(signIn(response.data))
                alert("Usuario Logeado")
                if(response.data.admin === 1){
                    router.push('/dashboard')
                }else{
                    router.push('/musics')
                }
            }
        })
    }

    return (
        <div className='flex flex-col justify-center items-center min-h-screen text-gray-800'>
            
            <video autoPlay loop muted playsInline className='absolute w-full h-screen -z-10 object-cover'>
                    <source src='/assets/masthead-bg.webm' type='video/webm; codecs=vp9'/>
                    <source src='/assets/masthead-bg.mp4' type='video/mp4; codecs=hvc1'/>
                </video>
            
            <div className='p-6 flex flex-col shadow-xl rounded-lg bg-white opacity-90'>
                <h2 className='font-semibold tracking-wide text-[24px] mb-4'>Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-3 w-80'>
                    <div className='flex flex-col items-start'>
                        <label className='ml-2' htmlFor="email">E-mail</label>
                        <input className='box w-full' name='email' type="email" {...register("email" , {required: true})} />
                        {errors.email && <span className='ml-2 text-red-600 text-sm tracking-wider'>Llene este campo</span>}
                    </div>
                    <div className='flex flex-col items-start'>
                        <label className='ml-2' htmlFor="email">Contraseña</label>
                        <input className='box w-full' name='email' type="password" {...register("password" , {required: true})} />
                        {errors.password && <span className='ml-2 text-red-600 text-sm tracking-wider'>Llene este campo</span>}
                    </div>
                    <div>
                        <button className='ml-1 px-3 mt-5 mb-4 py-2 bg-blue-500 rounded-lg text-white' type='submit'>Log in</button>
                    </div>
                    <div>
                        <p className='text-sm'>Aun no tienes una cuenta con nostros 
                            <Link href='/register'>
                                <span className='text-blue-500 cursor-pointer ml-2'>Registrate</span> 
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

