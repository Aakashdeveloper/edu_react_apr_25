import {useRef,useState} from 'react';
import {useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form'

const base_url = import.meta.env.VITE_API_URL

const Login = () => {
    const navigate = useNavigate()
    const emailRef=useRef()
    const passRef=useRef()
    const [message,setMessage] = useState()

    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm()

    const onSubmitCode = (data) => {
        console.log(data)
        console.log(emailRef.current.value)
        const formData = {
            email:emailRef.current.value,
            password:passRef.current.value
        }

        fetch(`${base_url}/login`,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                setMessage(data.token)
            }else{
                sessionStorage.setItem('ltk',data.token)
                navigate('/profile')
            }
        })
    }
    return(
        <>
            <br/>

            <div className='panel panel-success'>
                <div className='panel-heading'>
                    <h3>Login User</h3>
                </div>
                <div className='panel-body'>
                    <h2 style={{color:'red'}}>{message}</h2>
                    <form onSubmit={handleSubmit(onSubmitCode)}>
                        <div className='row'>
                            <div className='col-md-6 form-group'>
                                <label>Email</label>
                                <input className='form-control'
                                 {...register('email',{
                                    required:'Email is required',
                                    pattern:{
                                        value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message:'Invalid Email'
                                    }
                                })}
                                ref={(e) => {
                                    register('email').ref(e);
                                    emailRef.current = e
                                }} 
                                 defaultValue="praneet@gmail.com"/>
                                 {errors.email &&(
                                    <span style={{color:'red'}}>
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>
                            <div className='col-md-6 form-group'>
                                <label>Password</label>
                                <input className='form-control'
                                {...register('password',{
                                    required:'Password is required',
                                    minLength:{
                                        value:6,
                                        message:'Password must be at least 6 char'
                                    }
                                })}
                                ref={(e) => {
                                    register('password').ref(e);
                                    passRef.current = e
                                }} 
                                defaultValue="12345678"/>
                                {errors.password &&(
                                    <span style={{color:'red'}}>
                                        {errors.password.message}
                                    </span>
                                )}
                            </div>
                        </div>
                        <button className='btn btn-info'
                        type="submit">
                            Login
                        </button>
                    </form>
                </div>
            </div>
            
        </>
    )
}
export default Login;