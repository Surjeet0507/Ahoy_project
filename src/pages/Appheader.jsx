import { FileOutlined, PieChartOutlined, UserOutlined ,DesktopOutlined,TeamOutlined} from '@ant-design/icons';
import { Breadcrumb,  Layout, Menu, theme,Image, Select, Radio } from 'antd';
// import { DatePicker} from 'antd';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import {BsFillCartPlusFill} from 'react-icons/bs';
import {FcSettings} from 'react-icons/fc'
import {GrAddCircle} from 'react-icons/gr';
import {RiMenu3Line} from 'react-icons/ri';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


// import { Justify } from 'react-bootstrap-icons';
// import Image from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
    
  getItem('Dashboard ', '1', <PieChartOutlined />),
  getItem('Inventory', '2', <DesktopOutlined />),
  getItem('Calendar', '3', <TeamOutlined />),
  getItem('Orders', '4', <DesktopOutlined />),
  getItem('Customers', '5', <TeamOutlined />)
  // getItem('User', 'sub1', <UserOutlined />, [
  //   getItem('Calendar', '3'),
  //   getItem('Orders', '4'),
  //   getItem('Customers', '5'),
  // ]),
  // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  // getItem('Files', '9', <FileOutlined />),
];

const onChange = (date, dateString) => {
  console.log(date, dateString);}

const Appheader = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



  return (
    
    <Layout
      style={{
        minHeight: '100vh',
      }}
      
    >
        
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{background:'white',border:'1px solid rgba(0,0,0,0.15)'}}>
        <div className="demo-logo-vertical" />
        <div className='part'>
        <Image src="https://rehntitimage.blob.core.windows.net/rehntitimage/BusinessLogo_4d836a7a-2ec5-43bd-8050-a9e0fbcbe928" style={{width:'80px',padding:'10px'}}></Image>
        <span><RiMenu3Line style={{fontSize:'30px',marginTop:'20px'}}  collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}/></span> </div>
       
        <Menu theme="dark" defaultSelectedKeys={['1']}  mode="inline" items={items} style={{backgroundColor:'white',color:'black'}}>
           

        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: '0px 18px',
            background: colorBgContainer,
           display:'flex',
           justifyContent: 'space-between',  
           position:'sticky',
           zIndex:'2',
           top:'0'
          }}
        >
          
          <Form.Select aria-label="Default select example" style={{width:'150px',height:"50px",marginTop:'10px',border:'none'}}>
      <option>St.Pete Beach</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
         
        
      <p ><input type='search' style={{height:'40px',width:'300px',    borderRadius: '40px',
        
        border: '1px solid rgba(0,0,0,0.15)',marginRight:'10px'}}></input>  <BsFillCartPlusFill style={{fontSize:'24px',marginBottom:'5px',marginRight:'10px'}}/>  <GrAddCircle style={{fontSize:'24px',marginBottom:'5px',marginRight:'10px'}}/>
        <FcSettings style={{fontSize:'24px',marginBottom:'5px',marginRight:'10px'}}/>
        </p></Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              marginTop:10,
            }}
          >
            <div className='part1'>
            <div style={{display:'flex',justifyContent:'end',marginBottom:'10px'}}>
            
            <Form.Select aria-label="Default select example" style={{width:'180px',height:"40px"}}>
      <option>Today</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>  
         </div>

       <div className="main12" style={{display:'flex'}}>
    <Card style={{ width: '12rem' ,height:'90px' }}>
      <Card.Body>
        
        
        <Card.Text style={{display:'flex',justifyContent:''}}>
        <div>  <span className='main1' style={{height:'60px',width:'60px',border:'1px solid black',borderRadius:'50%' ,backgroundColor:'purple',color:'white',display:"grid",placeItems:"center"}}>
        <p style={{justifyContent:'center', marginBottom:'5px'}}>0.00%</p></span>
</div>
        <div><h6 style={{marginTop:'5px',marginLeft:'10px'}}>Passes</h6>
        <h6 style={{marginLeft:'10px'}}>$0.00%</h6>
        </div>
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '12rem' ,height:'90px',marginLeft:'10px'}}>
      <Card.Body>
        
        
        <Card.Text style={{display:'flex',justifyContent:''}}>
        <div>  <span className='main1' style={{height:'60px',width:'60px',border:'1px solid black',borderRadius:'50%' ,backgroundColor:'purple',color:'white',display:"grid",placeItems:"center"}}>
        <p style={{justifyContent:'center', marginBottom:'5px'}}>0.00%</p></span>
</div>
        <div><h6 style={{marginTop:'5px',marginLeft:'10px'}}>Passes</h6>
        <h6 style={{marginLeft:'10px'}}>$0.00%</h6>
        </div>
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '12rem' ,height:'90px',marginLeft:'10px'}}>
      <Card.Body>
        
        
        <Card.Text style={{display:'flex',justifyContent:''}}>
        <div>  <span className='main1' style={{height:'60px',width:'60px',border:'1px solid black',borderRadius:'50%' ,backgroundColor:'maroon',color:'white',display:"grid",placeItems:"center"}}>
        <p style={{justifyContent:'center', marginBottom:'5px'}}>0.00%</p></span>
</div>
        <div><h6 style={{marginTop:'5px',marginLeft:'10px'}}>Passes</h6>
        <h6 style={{marginLeft:'10px'}}>$0.00%</h6>
        </div>
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '12rem' ,height:'90px',marginLeft:'10px'}}>
      <Card.Body>
        
        
        <Card.Text style={{display:'flex',justifyContent:''}}>
        <div>  <span className='main1' style={{height:'60px',width:'60px',border:'1px solid black',borderRadius:'50%' ,backgroundColor:'blue',color:'white',display:"grid",placeItems:"center"}}>
        <p style={{justifyContent:'center', marginBottom:'5px'}}>0.00%</p></span>
</div>
        <div><h6 style={{marginTop:'5px',marginLeft:'10px'}}>Passes</h6>
        <h6 style={{marginLeft:'10px'}}>$0.00%</h6>
        </div>
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '12rem' ,height:'90px',marginLeft:'10px'}}>
      <Card.Body>
        
        
        <Card.Text style={{display:'flex',justifyContent:''}}>
        <div>  <span className='main1' style={{height:'60px',width:'60px',border:'1px solid black',borderRadius:'50%' ,backgroundColor:'brown',color:'white',display:"grid",placeItems:"center"}}>
        <p style={{justifyContent:'center', marginBottom:'5px'}}>0.00%</p></span>
</div>
        <div><h6 style={{marginTop:'5px',marginLeft:'10px'}}>Passes</h6>
        <h6 style={{marginLeft:'10px'}}>$0.00%</h6>
        </div>
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    <div className="MAIN2">
      
    </div>
            </div>
            <div className="part1" style={{marginTop:'30px'}}>
            <div className="MAIN2" >
            
            <div style={{display:'flex',justifyContent:'end',marginBottom:'10px'}}>
            
            <Form.Select aria-label="Default select example" style={{width:'180px',height:"40px"}}>
      <option>Today</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>  
         </div>

       <div className="main11" style={{display:'flex'}}>
    <Card style={{ width: '10rem' ,height:'90px',border:'1px solid black',backgroundColor:'#422680',color:'white' }}>
      <Card.Body>
        
        
        <Card.Text >
        
        
        <h6>ITEMS OUT</h6>
        <h3>48</h3>

        
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem' ,height:'90px',border:'1px solid black',backgroundColor:' #341671',color:'white',marginLeft:"10px" }}>
      <Card.Body>
        
        
        <Card.Text >
        
        
        <h6>ACTIVITIES</h6>
        <h3>0</h3>

        
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem' ,height:'90px',border:'1px solid black',backgroundColor:'#660f56',color:'white',marginLeft:"10px" }}>
      <Card.Body>
        
        
        <Card.Text >
        
        
        <h6>UNPAID ORDERS</h6>
        <h3>0</h3>

        
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem' ,height:'90px',border:'1px solid black',backgroundColor:'#280659',color:'white',marginLeft:"10px" }}>
      <Card.Body>
        
        
        <Card.Text >
        
        
        <h6>ITEMS SOLD</h6>
        <h3>0</h3>

        
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '10rem' ,height:'90px',border:'1px solid black',backgroundColor:'#f54952',color:'white',marginLeft:"10px" }}>
      <Card.Body>
        
        
        <Card.Text >
        
        
        <h6>ORDERS</h6>
        <h3>0</h3>

        
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    
      
    
            </div>

            </div>
<div className='card' style={{marginTop:'30px',border:'none'}}>
<div className='carousel' style={{padding:'10px'}}>
<div className='picker' style={{display:'flex',justifyContent:'space-between',marginBottom:'20px'}}>

<div>   <Form.Select aria-label="Default select example" style={{width:'280px',height:"40px"}}>
      <option>Today</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>  </div>
<div> 
<Form.Check
            inline
            label="Current Month"
            name="group1"
            type='radio'
            style={{fontSize:'16px'}}
          />
          <Form.Check
            inline
            label="Current Week"
            name="group1"
            type='radio'
            style={{fontSize:'16px'}}
            
          />
          <Form.Check
            inline
            name="group1"
            label="Last Month "
            type='radio'
            style={{fontSize:'16px'}}
          /> 
           <Form.Check
            inline
            name="group1"
            label="Last Week "
            type='radio'
            style={{fontSize:'16px'}}
          /> 
          </div>


</div>


            <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={1000} infinite={true} >
  <div style={{textAlign:'center',marginTop:'30px',padding:''}}>
    <img src='https://rehntitimage.blob.core.windows.net/rehntitimage/ProductImages_3b9776b8-bcf0-4d65-b13a-80caa2bb97de' alt='' style={{height:'150px',width:'180px'}}/>
    <p style={{color:'red'}}>0 OUT | 14 IN</p></div>
  <div style={{textAlign:'center'}}>
    <img src='https://rehntitimage.blob.core.windows.net/rehntitimage/ProductImages_7259baf3-fc02-49cd-bc9e-d3b5fc91d9f5' alt='' style={{height:'150px',width:'180px'}}/>
    <p style={{color:'red'}}>0 OUT | 14 IN</p>
    </div>
  <div style={{textAlign:'center'}}>
    <img src='https://rehntitimage.blob.core.windows.net/rehntitimage/ProductDefaultImages_c44056a2-e378-4a61-bc2d-de007244e945'alt='' style={{height:'150px',width:'180px'}}/>
    <p style={{color:'red'}}>0 OUT | 14 IN</p></div>
  <div style={{textAlign:'center'}}>
    <img src='https://rehntitimage.blob.core.windows.net/rehntitimage/ProductDefaultImages_5a58c4a4-d7ba-4a7c-9d3a-9773f3d253f1'alt='' style={{height:'150px',width:'180px'}}/>
    <p style={{color:'red'}}>0 OUT | 14 IN</p></div>
    <div style={{textAlign:'center'}}>
    <img src='https://rehntitimage.blob.core.windows.net/rehntitimage/ProductImages_3b9776b8-bcf0-4d65-b13a-80caa2bb97de'alt='' style={{height:'150px',width:'180px'}}/>
    <p style={{color:'red'}}>0 OUT | 14 IN</p></div>
  <div style={{textAlign:'center'}}>
    <img src='https://rehntitimage.blob.core.windows.net/rehntitimage/ProductImages_7259baf3-fc02-49cd-bc9e-d3b5fc91d9f5'alt='' style={{height:'150px',width:'180px'}}/></div>
  <div style={{textAlign:'center'}}>
    <img src='https://rehntitimage.blob.core.windows.net/rehntitimage/ProductDefaultImages_c44056a2-e378-4a61-bc2d-de007244e945'alt='' style={{height:'150px',width:'180px'}}/>
    <p style={{color:'red'}}>0 OUT | 14 IN</p></div>
  <div style={{textAlign:'center'}}>
    <img src='https://rehntitimage.blob.core.windows.net/rehntitimage/ProductDefaultImages_5a58c4a4-d7ba-4a7c-9d3a-9773f3d253f1' alt='' style={{height:'150px',width:'180px'}}/>
    <p style={{color:'red'}}>0 OUT | 14 IN</p></div>
</Carousel>
</div>
          </div>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
         
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Appheader;