import React from 'react';
import { useEffect,useState } from 'react';
import { getallposts } from './services/Api';
import { Box,InputBase,Typography,Card,CardContent,styled } from '@mui/material';
const SearchWrapper = styled(Box)({
    marginTop:20,
    display:'flex',
    justifyContent:'center',
    '& > div':{
      width:500,
      height:45,
      border:'1px solid #767676',
      borderRadius: 10,
      display:'flex',
      alignItems:'center',
      marginRight: 20
    }

})
const PostWrapper = styled(Box)(
  {
    display:'flex',
    justifyContent:'center',
    marginTop:50,
    flexWrap:'wrap',
    '& > div':{
      border:'1px solid #442d0',
      borderRadius:10,
      margin:10,
      width:'30%',
      height:300
    }
  }
)
const Search = () => {
  const [posts,setPosts]=useState([]);
  const[text, setText]=useState("");
useEffect(
  ()=>{
     const getData = async ()=>{
      const response = await getallposts();
      setPosts(response.data);
     }
     getData();
  },[]
)

  return (
    <>
      <SearchWrapper>
        <InputBase placeholder='Search By Jobs Title'
          onChange={(e)=>setText(e.target.value)}
        />
      </SearchWrapper>
      <PostWrapper>
        {
          posts.filter(post=>post.profile.toLowerCase().includes(text.toLowerCase())).map(post =>(
           <Card>
            <CardContent>
             <Typography variant='h5'>
              {post.profile}
             </Typography>
             <Typography>
              {post.type==="Offline" ? "Remote":"Office"}
             </Typography>
             <Typography>
              Salary:{post.salary}
             </Typography>
             <Typography style={{color :'#6f6f6f',margin:'10px 0'}}>
              {post.description.length > 150 ?post.description.substring(0,150)+"......":post.description}
             </Typography>
             <Typography>
             <b>Experience:</b> {post.experience}
             </Typography>
             <Typography>
              <b>Technology:</b>{post.technology}
             </Typography>
             <Typography style={{color:'#6f6f6f',marginTop:'auto'}}>
              Posted on {new Date(post.createdAt).toLocaleDateString()}
             </Typography>
            </CardContent>
           </Card>
          ))
        }
      </PostWrapper>
    </>
  );
}

export default Search;
