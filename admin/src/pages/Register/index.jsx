import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './styles/style.css';

export default function Register() {
  return (
    <div className='register__container'>
      <img className='logoImage' src="https://ik.imagekit.io/domsan/Logo_0vBSw9piY.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1662803005580&tr=w-1080%2Ch-1080%2Cfo-auto" alt="" />
      <h2>Playpoint</h2>
      <TextField id="outlined-basic" label="Email" variant="outlined" type="email" />
      <TextField id="outlined-basic" label="Password" type="password" variant="outlined" />
      <TextField id="outlined-basic" label="Confirm Password" type="password" variant="outlined" />
      <Button>Register</Button>
    </div>
  )
}
