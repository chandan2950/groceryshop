import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import './AuthPage.css'
const ForgotPassword = () => {
    return (
        <div className='authpage'>
            <Navbar reloadnavbar={false}/>

            <div className='authcont'>
                <img src='https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1095.jpg?t=st=1715967722~exp=1715971322~hmac=ab5b414fbe6019437b89695f0cd06ebeb7ad867855ae1ea7ec2e8ace85b21176&w=740'
                    alt='signup' />

                <form className='authform'>
                    <h1>Forgot Password</h1>
                   
                    <div className='formgroup'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' />
                    </div>

                    <div className='form-group-row'>
                        <div className='formgroup'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' />
                        </div>
                        <div className='formgroup'>
                        <label htmlFor='cpassword'>Confirm New Password</label>
                        <input type='password' id='cpassword' />
                    </div>
                    </div>

                    <Link to='/login'
                        className='stylenone'
                    >
                        <p>Try Login again?</p>
                    </Link>
                    <Link to='/signup'
                        className='stylenone'
                    >
                        <button className='btn'>Verify</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword