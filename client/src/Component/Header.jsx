import React from 'react';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate =useNavigate();
const logo = "https://get-staffed.com/wp-content/uploads/2020/07/indeed-logo.png";
  return (
   <div className='Header'>
    
       <img onClick={()=>navigate('/')} src={logo} alt='logo' style={{height:60, marginLeft:15}} />
  
    <p onClick={()=>navigate('/search')} style={{marginLeft:14,paddingTop:10,cursor:'pointer'}}>Find Job</p>
    <p onClick={()=>navigate('/create')}style={{marginLeft:14,paddingTop:10,cursor:'pointer'}}>Post Job</p>
   </div>
  );
}

export default Header;
