import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik,Form as FormikForm } from 'formik';
 import * as Yup from 'yup';
// import {Link} from 'react-router-dom'
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import Spinner from 'react-bootstrap/Spinner';

import '../App.css';

const loginSchema =Yup.object({
  email: Yup.string().email('Invalid email').required('Please enter a valid Email'),
  passwords:Yup.string().min(6).required(' Password must be atleaste 6 characters'),
})

 const SignupSchema = Yup.object().shape({
  emailId: Yup.string().email('Invalid email').required('Please enter a valid Email'),
  
});   
const initialValues={
  
  email:"",
  passwords:""
}

const Login=()=> {
  var navigater=useNavigate();
  const[spin,setSpin]=useState(false)
  const [show, setShow] = useState(false);
      
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [validated, setValidated] = useState(false);
      const [message, setMessage] = useState("");

  const{values,handleBlur,handleChange,errors,handleSubmit,touched}=useFormik({
    initialValues:initialValues,
    validationSchema:loginSchema,
    onSubmit:(values)=>{
      console.log(values)
      const person={
        "businessId":"4",
        "emailId":values.email,
        "applicationId":"58",
        "password":values.passwords,
        "ipAddress": "string",
        "rememberMe": true,
        "isEmployee": true

      }
      console.log(person)
      axios.post("https://rehntitapistaging.azurewebsites.net/api/Auth/Login",person)
      .then((response)=>{
        console.log(response)
        setMessage(response.status); 
        navigater('/Passcode');
        notify()
      })
      .catch((error) => 

toast.error(error.response.data.responseMessage, {
  position: toast.POSITION.BOTTOM_RIGHT
})
);
    }
  })
  function notify () {
    console.log("hghfgd")
  
  
    toast.success("Success Notification !", {
    position: toast.POSITION.BOTTOM_RIGHT
  })
  
  
};
   
  console.log(errors)

  function submit1(values) {
    // setLoader(true);
    // event.preventDefault();
    // const form1 = event.currentTarget;
    // if (form1.checkValidity() === false) {
    //   event.preventDefault()
    //   event.stopPropagation();
    //   setValidated(true);
    //   // return;
    // }
    // else{
      // event.preventDefault()
    // setValidated(true);
    // setModalShow(false);
    // setLoader(true);
// axios.post()
const profile={
  "businessId":"4",
  "emailId": values.emailId,

}
// setLoader(true);

axios.post('https://rehntitapistaging.azurewebsites.net/api/Auth/ForgotPassword',profile)
.then(function (response) {
  console.log(response);
  // setLoader(false);
  handleClose();
  toast.success(response.data.responseMessage, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  // setModalShow(false);
  // setSpin(false);

})
.catch(function (error) {
  console.log(error);
  toast.error(error.response.data.responseMessage, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  // setLoader(false);

});
  // setEmail({emailId:''})
    // }
    
  }






// console.log(details)

  return (
    <>
    <div className='login'>
    <Card style={{ width: '28rem',border:'0px',boxShadow:"3px 5px 23px 16px whitesmoke",borderRadius:'15px',cursor:'pointer' }}>
        <div className='image' style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100px'}}>
      <Card.Img variant="top" src="https://rehntitimage.blob.core.windows.net/rehntitimage/BusinessLogo_4d836a7a-2ec5-43bd-8050-a9e0fbcbe928" style={{height:'80px',width:'80px'}} />
      </div>
      <Card.Body>
      <Form 
      noValidate 
      //  validated={validated}
      onSubmit={handleSubmit}
      >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email </Form.Label>
        <Form.Control
        required
         type="email" placeholder="Email Address" 
        style={{borderRadius:'30px'}}
        name="email"
        value={values.email}
        onChange={handleChange}
        
        // onChange={(e)=>setEmail(e.target.value)} value={emailId} 
        />
        {errors.email && touched.email ?( <p className='pError'>{errors.email}</p>):null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Password </Form.Label>
        <Form.Control 
        required
        type="password" placeholder="Password"
        style={{borderRadius:'20px'}} 
        name="passwords"
        value={values.passwords}
        onChange={handleChange}
        onBlur={handleBlur}
        // onChange={(e)=>setPassword(e.target.value)} value={password} 
        />
       {errors.passwords && touched.passwords ?( <p>{errors.passwords}</p>):null}
      </Form.Group>
      <Row >
            <Col sm={6} >
            <Form.Check
            type="checkbox"
            id="autoSizingCheck2"
            label="Remember me"
          />
            </Col>
            <Col sm={6} style={{textAlign:'end'}} >
                {/* {/ <a href='/' style={{textDecoration:'none',color:' #f54952'}}>Forgot Password?</a> /} */}
                <Button variant="" onClick={handleShow} style={{color:'red',fontSize:'18px'}}>
        Forgot Password?
      </Button>
     
      <Modal show={show} onHide={handleClose}  closeButton className='modal'
      size='sm'
      >
        
        <Modal.Header closeButton  style={{background:''}} className='popupHeader'>
          
          <Modal.Title >Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Formik
       initialValues={{
         emailId: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={submit1}
     >
       {({ errors,values,handleChange }) => (
         <FormikForm className="px-3"  >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter email to reset password</Form.Label>
           <Form.Control
              
                placeholder="E-mail address"
                value={values.emailId}
               onChange={handleChange}
                name="emailId"
                 
              />
            <div style={{color:'red'}}>{errors.emailId}</div> 
           <Button
              type="submit"
              variant="danger"
              // onClick={handleClose}
              style={{height:'36px',width:'80px'}}
              className="forgetdiv rounded-pill px-3 mt-3 "
            >Send
              {/* {!loader ? <span>Send</span>:<Spinner style={{height:'20px',width:'20px',borderRadius:'50%'}}/>} */}
            </Button>
           </Form.Group>
          </FormikForm>
       )}
     </Formik>

          
          {/* <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter Email To Reset Password</Form.Label>
        <Form.Control type="email" placeholder="E-mail address" />
      </Form.Group>
      
    </Form> */}
          </Modal.Body>
        {/* <Modal.Footer style={{textAlign:'start',display:'block'}}>
          
          <Button variant="danger" onClick={handleClose} >
            Send
          </Button>
        </Modal.Footer> */}
      </Modal>
            </Col>
        </Row>
      <Row>
        <Col sm={12} style={{textAlign:'end'}}>
        <Form.Group className="mt-4" controlId="exampleForm.ControlInput1">
      
       <div className='loginButton'>
         <Button className='button'variant="danger" type="submit" style={{borderRadius:'20px',width:'90px',border:'1px solid #f54952'}}
        
         >{!spin?<p>login</p>:<Spinner    size="sm"   animation="border" />}</Button>
         </div>
         
         {/* <div className='loginButton'>
        <Button className='button'variant="danger" type="submit" style={{borderRadius:'20px',width:'90px',border:'1px solid #f54952'}}>Log In</Button>
        </div> */}
            </Form.Group>
        </Col>
      </Row>
    </Form>
      </Card.Body>
    </Card>
    </div>
    <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />

    </>
  );
}
export default Login;