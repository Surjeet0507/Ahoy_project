import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import axios from "axios";
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import '../App.css';
function Login() {
  
      const[details,setDetail]=useState([]);
      const [show, setShow] = useState(false);
      
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const[emailId,setEmail]=useState("");
      const[password,setPassword]=useState("");
      const [validated, setValidated] = useState(false);
      
      
      // console.log(email)
      
      
      const navigater=useNavigate();
const handleAddDetailSubmit=(e)=>{

  const form = e.currentTarget;
  if (form.checkValidity() === false) {
    e.preventDefault();
    e.stopPropagation();
    setValidated(true);
  }
else{
  setValidated(true);
  navigater('/Passcode')
  let person ={
         emailId,
        password,
    }
    console.log(person)
    setDetail([...details,person])

const personData={



  "businessId": "4",
  "emailId": emailId,
  "applicationId": "58",
  "password": password,
  "ipAddress": "string",
  "rememberMe": true,
  "isEmployee": true


}
console.log(personData)

    axios
    .post("https://rehntitapistaging.azurewebsites.net/api/Auth/Login", 
      personData
      
    )
    
    .then((response) => {return(


      console.log(response)
    )
      
      // setDetail(response.data)
      
      // .catch(err => console.log(err));
      
    });
  }
};




// e.preventDefault()

//   let person ={
//      emailId,
//     password,
// }
// console.log(person)
// // setDetail([...details,person])
// axios
// .post("https://rehntitapistaging.azurewebsites.net/api/Auth/Loginl", {
//   person
  
// })

// .then((response) => {
//   console.log(response)
//   setDetail(response.data)
//   // .catch(err => console.log(err));
// });



// }

console.log(details)

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
       validated={validated}
      onSubmit={handleAddDetailSubmit}
      >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email </Form.Label>
        <Form.Control
        required
         type="email" placeholder="Email Address" 
        style={{borderRadius:'30px'}}
        name="email"
        
        onChange={(e)=>setEmail(e.target.value)} value={emailId} 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password </Form.Label>
        <Form.Control 
        required
        type="password" placeholder="Password"
        style={{borderRadius:'20px'}} 
        name="passwords"
        onChange={(e)=>setPassword(e.target.value)} value={password} 
        />
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
                {/* <a href='/' style={{textDecoration:'none',color:' #f54952'}}>Forgot Password?</a> */}
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
          
          <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter Email To Reset Password</Form.Label>
        <Form.Control type="email" placeholder="E-mail address" />
      </Form.Group>
      
    </Form>
          </Modal.Body>
        <Modal.Footer style={{textAlign:'start',display:'block'}}>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="danger" onClick={handleClose} >
            Send
          </Button>
        </Modal.Footer>
      </Modal>
            </Col>
        </Row>
      <Row>
        <Col sm={12} style={{textAlign:'end'}}>
        <Form.Group className="mt-4" controlId="exampleForm.ControlInput1">
       {/* <Link to="Passcode"> */}
         <Button type="submit" style={{backgroundColor:' #f54952',borderRadius:'20px',width:'90px',border:'1px solid #f54952'}}
        
         >Log In</Button>
         {/* </Link> */}
            </Form.Group>
        </Col>
      </Row>
    </Form>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default Login;

// function Login() {
//   return (
    
//   );
// }

// export default Login;