import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import './AuthPage.css'
import Footer1 from '../../Components/Footer/Footer'


const Login = () => {
    return (
        <div className='authpage'>
            <Navbar reloadnavbar={false}/>

            <div className='authcont'>
                <img src='https://img.freepik.com/free-vector/grocery-promotion-concept-illustration_114360-19312.jpg?w=740&t=st=1715966586~exp=1715967186~hmac=9ff4b63aa404a817f70371ae3fbe128b948ce4257845e0136996993416d66689'
                    alt='login' />

                <form className='authform'>
                    <h1>Login</h1>
                    <div className='formgroup'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' />
                    </div>

                    <div className='formgroup'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' />
                    </div>

                    <Link to='/forgotpassword'
                        className='stylenone'
                    >
                        <p>Forgot password?</p>
                    </Link>
                    <Link to='/'
                        className='stylenone'

                    >
                        <button className='btn'>Login</button>
                    </Link>
                    <h2 className='or'>OR</h2>
                    <Link to='/signup'
                        className='stylenone'
                    >
                        <button className='btn'>Signup</button>
                    </Link>
                </form>
            </div>
            <div>
                <Footer1/>
            </div>
        </div>
        
    )
}

export default Login