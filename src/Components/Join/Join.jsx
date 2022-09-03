import React from 'react'
import { useFormik } from "formik"
import * as Yup from "yup"
import './Join.css'

const Join = () => {
 const formik = useFormik({
  initialValues: {
   firstName: "",
   email: "",
   number:"",
   description:""
  },
  validationSchema: Yup.object({
   firstName: Yup.string().max(15, "Must be 15 charachters or less").required("Required"),
   email: Yup.string().email("Invalid email address").required("Required"),
   number: Yup.string().min(10, "Must be 11 charachters at least").required("Required"),

  }),
  onSubmit:  (values) => {
console.log(values)
  }
 });
console.log(formik.touched)
   return (
     <div className='join' id="join">
     <div className="joiniso">
<div className="join-h">
 <span>Join </span>
 <span>Us </span>
 <span> Now </span>
 <div className="contact-us">
Contact Us
 </div>
 <hr/>

 </div>
 <div className="join-text">
  <span ></span>
  </div>
 <form onSubmit={formik.handleSubmit}>
<div className="contact-inputs">
  <div className="input-container">
    <input 
    id="firstName"
    name="firstName"
    type="text"
    placeholder='Name'
 pattern="[a-zA-Z'-'\s]*"
 title="Alphabets Only"
    onChange={formik.handleChange}
    value={formik.values.firstName}
     onBlur={formik.handleBlur}
    />
    {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
  </div>
    <div className="input-container">
    <input 
    id="number"
    name="number"
    type="number"
    placeholder='Phone Number'
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.number}
    />
    {formik.touched.number && formik.errors.number ? <p>{formik.errors.number}</p> : null}
  </div>
    <div className="input-container">
    <input 
    id="email"
    name="email"
    type="email"
    placeholder='Email'
    onChange={formik.handleChange}
    value={formik.values.email}
     onBlur={formik.handleBlur}
    />
    {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
    </div>
  <div className="input-container">
    <input className='description-in'
    id="description"
    name="description"
    type="text"
    placeholder='Description (Optional)'
    onChange={formik.handleChange}
    value={formik.values.description}
    />
  </div>
  </div>
  <div className="submit-button">
    <button type="submit" className="sub-button">Submit</button>
    </div>
  </form>
 <div className="join-h1">
 <div className='left-join'>
  <div className="contact-address">
    <h3>Number</h3>
<a href="tel:+201501884003" className="contact-no">+20 150 188 4003</a>
 </div>
 </div>
 <div className="right-join">
  {/* <div className="email">
    <h3>Email</h3>
   <a href="mailto:Gm.madinaty@goldsgymegypt.com">Gm.madinaty@goldsgymegypt.com</a>
  </div> */}
 </div>
 </div>
  </div>
  </div>

    
  )
}

export default Join