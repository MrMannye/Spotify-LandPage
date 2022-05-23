import React from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Axios from 'axios'

export default function Register() {
    
    const router = useRouter();
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = (data) => { 
        console.log(data)
        Axios.post(`http://localhost:3001/users/addUser`,{
            name: data.nombre,
            lastname: data.apellido,
            email: data.email,
            password: data.password,
        }).then((response) => {
            console.log(response); 
            alert("Usuario registrado correctamente")
            router.push('/dashboard')
        })
    }

    return (
        <div className='flex flex-col justify-center items-center min-h-screen text-gray-600'>
                <video autoPlay loop muted playsInline className='absolute w-full h-screen -z-10 object-cover'>
                    <source src='/assets/masthead-bg.webm' type='video/webm; codecs=vp9'/>
                    <source src='/assets/masthead-bg.mp4' type='video/mp4; codecs=hvc1'/>
                </video>
            
            <div className='p-6 flex flex-col shadow-xl rounded-lg bg-white opacity-90'>
                <h2 className='font-semibold tracking-wide text-[24px] mb-4'>Registro</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
                    <div className='flex items-center space-x-4'>
                        <div className='flex flex-col items-start'>
                            <label className='ml-2' htmlFor="nombre">Nombre</label>
                            <input className='box' name='nombre' type="name" {...register("nombre" , {required: true})} />
                            {errors.nombre && <span className='ml-2 text-red-600 text-sm tracking-wider'>Llene este campo</span>}
                        </div>
                        <div className='flex flex-col items-start'>
                            <label className='ml-2' htmlFor="apellido">Apellido</label>
                            <input className='box' name='apellido' type="name" {...register("apellido" , {required: true})} />
                            {errors.apellido && <span className='ml-2 text-red-600 text-sm tracking-wider'>Llene este campo</span>}
                        </div>
                    </div>
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
                        <button className='ml-1 px-3 mt-5 mb-4 py-2 bg-blue-500 rounded-lg text-white' type='submit'>Registrarse</button>
                    </div>
                    <div>
                        <p className='text-sm'>¿Ya tienes una cuenta con nosostros? 
                            <Link href='/login'>
                                <span className='text-blue-500 cursor-pointer ml-2'>Log in</span> 
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
