import React from 'react';
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';
const Home = () => {
const animatedImage = "https://images.ctfassets.net/pdf29us7flmy/5r34jiS1YfJuoRzqp3XH6y/6fba6547e16cd0ad08ae28dad306015d/Screen_Shot_2023-01-11_at_9.21.31_AM.png?w=720&q=100&fm=avif";
  return (
    <div className='Home'>
     <div className='Hometext'>
        <p>Let's make your next<br/> great hire. fast.</p>
        <Link to ='/create'>
            <Button  variant="contained" style={{marginBottom:100}}>POST A JOB</Button>
        </Link>
        
     </div> 
     <div className='Animateimg'>
     
        <img src={animatedImage} alt='animatedimg'/>
        
     </div>
    </div>
  );
}

export default Home;
