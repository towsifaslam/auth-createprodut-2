import React, { useState } from 'react'
import 
{MDBCard,MDBCardBody,MDBInput,MDBCardFooter,MDBValidation,MDBBtn,MDBIcon,MDBSpinner}from'mdb-react-ui-kit'
 
import {toast}from'react-toastify'
import {Link,useNavigate} from'react-router-dom'
import { useDispatch } from 'react-redux'
import { register } from '../redux/features/authSlice'
const initialState = {
  firstName:'',
  lastName:'',
  email: '',
  password:'',
  confirmPassword:''
}


export default function Register() {
  const[formValue,setFormValue] = useState(initialState);
  const {firstName,lastName,email,password,confirmPassword} = formValue
   const dispatch = useDispatch();
   const navigate = useNavigate();
  const handleSubmit =(e)=>{
    e.preventDefault()
    if(password !== confirmPassword){ return toast.error("Passwod shoud match")}
    if(email && password && email && firstName&& lastName){
       console.log({firstName,lastName,email,password})
      dispatch(register(formValue,navigate,toast))
    }
  }
  const OnInputChange=(e)=>{
    let{name,value} = e.target;
    setFormValue({...formValue,[name]:value})
  }
  return (
    <div
    style={{
      margin: "auto",
      padding: "15px",
      maxWidth: "450px",
      alignContent: "center",
      marginTop: "120px",
    }}
  >
    <MDBCard alignment="center">
      <MDBIcon fas icon="user-circle" className="fa-2x" />
      <h5>Sign Up</h5>
      <MDBCardBody>
        <MDBValidation  noValidate className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <MDBInput
              label="First Name"
              type="text"
              value={firstName}
              name="firstName"
              onChange={OnInputChange}
              required
              invalid
              validation="Please provide first name"
            />
          </div>
          <div className="col-md-6">
            <MDBInput
              label="Last Name"
              type="text"
              value={lastName}
              name="lastName"
              onChange={OnInputChange}
              required
              invalid
              validation="Please provide Firts name"
            />
          </div>
          <div className="col-md-12">
            <MDBInput
              label="Email"
              type="email"
              value={email}
              name="email"
              onChange={OnInputChange}
              required
              invalid
              validation="Please provide email"
            />
          </div>
          <div className="col-md-12">
            <MDBInput
              label="Password"
              type="password"
              value={password}
              name="password"
              onChange={OnInputChange}
              required
              invalid
              validation="Please provide password"
            />
          </div>
          <div className="col-md-12">
            <MDBInput
              label="Password Confirm"
              type="password"
              value={confirmPassword}
              name="confirmPassword"
              onChange={OnInputChange}
              required
              invalid
              validation="Please provide confirm password"
            />
          </div>
          <div className="col-12">
            <MDBBtn style={{ width: "100%" }} className="mt-2">
              
                
          
              Register
            </MDBBtn>
          </div>
        </MDBValidation>
      </MDBCardBody>
      <MDBCardFooter>
        <Link to="/login">
          <p>Already have an account ? Sign In</p>
        </Link>
      </MDBCardFooter>
    </MDBCard>
  </div>
  )
}
