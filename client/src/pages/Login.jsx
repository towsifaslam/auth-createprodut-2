import React, { useEffect, useState } from 'react'
import 
{MDBCard,MDBCardBody,MDBInput,MDBCardFooter,MDBValidation,MDBBtn,MDBIcon,MDBSpinner}from'mdb-react-ui-kit'
import { Link,useNavigate } from 'react-router-dom'
import {useDispatch,useSelector}from'react-redux'
import {toast}from'react-toastify'
import { login } from '../redux/features/authSlice'
import {GoogleLogin} from'react-google-login'
const initialState = {
  email: '',
  password:''
}
export default function Login() {

   const {error,loading} = useSelector((state)=> ({...state.auth}))
  const[formValue,setFormValue] = useState(initialState);
  const {email,password} = formValue;
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    error && toast.error(error)
  },[error])
   const handleSubmit =(e)=>{
    e.preventDefault()
    if(email && password){
      console.log(formValue)
      dispatch(login({formValue,navigate,toast}))

    }
   }
   const onInputChange=(e)=>{
    let {name,value} = e.target;
    setFormValue({...formValue,[name]:value})

   }
  return (
    <div style={{margin: 'auto',padding:'15px' ,maxWidth:'450px',alignContent:'center',marginTop:'120px'}}>
      <MDBCard alignment='center'>
        <MDBIcon fas icon='user-circle' className='fa-2x'>
          <h5>Sing in</h5>
          <MDBCardBody>
            <MDBValidation noValidate className='row g-3' onSubmit={handleSubmit}>
               <div className='col-md-12'>
                <MDBInput label="Email" type='email' value={email} name='email' required invalid validation="please provide your email" onChange={onInputChange}></MDBInput>
               </div>
               <div className='col-md-12'>
                <MDBInput label="password" type='password' value={password} name='password' required invalid validation="please provide your password" onChange={onInputChange} ></MDBInput>
               </div>
               <div className='col-12'>
                <MDBBtn style={{width:'100%'}} className='mt-2' >
                   {
                    loading &&(
                      <MDBSpinner size='sm' role='status' tag='span' className='me-2'/>
                    )
                   }
                  Login
                </MDBBtn>
               </div>
            </MDBValidation>
          
          </MDBCardBody>
          <MDBCardFooter>
            <Link to='/register'>
              <p>Don't have an account ? sing up</p>
            </Link>
          </MDBCardFooter>
        </MDBIcon>
      </MDBCard>
    </div>
    
    )
}
