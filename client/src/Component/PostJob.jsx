import { useState } from 'react';
import React from 'react';
import { TextField,Button } from '@mui/material';
import Custom from './Custom';
import { savePost } from './services/Api';
import { useNavigate } from 'react-router-dom';
const defaultObj={
  profile:"",
  type:"",
  description:"",
  experience:"",
  technology:[],
  salary:""

}
const options ={
  type:["Online","Offline"],
  experience:["0-2 Years","3-5 Years","5-8 Years","8 and more Years"],
  technology:["Java","React","Python","Javascript","SpringBoot","MongoDB","HTML","CSS","C","C++","C#","Angular"],
  salary:["0-300000","300000-600000","600000-900000","900000-1200000","1200000 and More"]
}
const PostJob = () => {
  const navigate =useNavigate();
  const [data, setData] = useState(defaultObj);
  const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3zkKYlIHjjoQrE4e-a5xiJIaK0reWlcDhewsx8rjV87d8M82";
  const handleChange=(e) =>{
      setData({
        ...data,[e.target.name]: e.target.value
      });
  }
  const saveJob = async ()=>{
     await savePost(data);
     navigate('/search');
  }
  return (
  <div className='postdiv'>
    <div className='imgdiv'>
       <p style={{marginLeft:30, fontSize:35,fontWeight:700,opacity:0.7}}>Create a job post</p>
       <img src={image} alt='imagy'/>
    </div>
    <div className='Formtext'>
        <TextField  placeholder='Job Title' name="profile" onChange={handleChange} sx={{ marginBottom: 2 }} />
        <Custom
         id="Job-type"
         label="Job Type"
         value={data.type}
         handleChange={handleChange}
         name="type"
         options={options.type}

  />
        <TextField placeholder='Job Description' name="description" onChange={handleChange} sx={{ marginBottom: 2 }} />
        <Custom 
         id="Job-experince-label"
         label="Experience"
         value={data.experience}
         handleChange={handleChange}
         options={options.experience}
        name="experience"/>
        <Custom
         id="Job-technology-label"
         label="Technology"
         value={data.technology}
         handleChange={handleChange}
         options={options.technology}
        name="technology"
        multiple
        />
        <Custom
         id="Job-salary-label"
         label="Salary"
         value={data.salary}
         handleChange={handleChange}
         options={options.salary}
         name="salary"/>
        <Button onClick={()=>saveJob()} sx={{ marginBottom: 2 }}>Save job</Button>
    </div>
  </div>
  );
}

export default PostJob;
