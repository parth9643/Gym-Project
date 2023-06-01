import React,{useEffect,useState} from 'react';
import Pagination from '@mui/material/Pagination';
import {Box,Stack,Typography} from '@mui/material';
import ExerciseCart from './ExerciseCart';
import { FetchData,exerciseOptions } from '../utlis/FetchData';

const Exercises = ({exercises,bodyPart,setexe}) => {
  const[currentPage, setCurrentPage]= useState(1);
  const exePerPage=10;

  const lastexe=currentPage*exePerPage;
  const firstexe=lastexe-exePerPage;
  const currentexe = bodyPart === 'all' ? exercises : exercises.slice(firstexe, lastexe);


  const pageup =(e,value)=>{
    setCurrentPage(value);
    window.scrollTo({top:1800, behavior:"smooth"})
  }

  useEffect(()=>{
    const fetchexe= async()=>{
      
      
      if(bodyPart !== 'all'){
       const temp1= await FetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      

      setexe(temp1)
       } 
    };

    fetchexe();
  },[bodyPart, setexe]);
  
  return (
    <Box id="exercises"
      sx={{mt: {lg :"110px"}}}
      mt="50px" 
      p="20px"
    >

    <Typography variant="h4" mb="46px">
      Showing Results
    </Typography>
    

    <Stack direction="row" sx={{gap: {lg:"110px", xs:"50px"}}}
    flexWrap="wrap" justifyContent="center">
    {currentexe.map((exercise, idx) => (
      <ExerciseCart key={idx} exercise={exercise} />
    ))}
    
    </Stack>

    <Stack mt="100px" alignItems="center">
        {exercises.length >9 &&(
          <Pagination 
            color="secondary"
            shape='rounded'
            count={Math.ceil(exercises.length/exePerPage)}
            page={currentPage}
            onChange={pageup}
            size="large"
            />
        )}
    </Stack>
    </Box>
  )
}

export default Exercises
