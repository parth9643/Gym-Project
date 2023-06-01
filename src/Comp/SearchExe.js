import { React, useState,useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { exerciseOptions,FetchData } from '../utlis/FetchData';
import '../App.css'
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExe = ({setexe,setBodyPart,bodyPart}) => {
  const [search, setSearch] = useState(" ")
  const[bodyParts,SetBodyParts]=useState([]);

  useEffect(()=>{
      const fetchBodyPartData = async ()=> {
        const bodyPartData = await FetchData(
          'https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

        SetBodyParts(['all',...bodyPartData]);
      }

      fetchBodyPartData();
  },[])


  const handleSearch= async ()=>{
    if(search){
      const excerciseData= await FetchData(
        'https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      
      const SearchedExe=excerciseData.filter(
        (exercises)=>exercises.name.toLocaleLowerCase().includes(search)
        ||exercises.target.toLocaleLowerCase().includes(search)
        ||exercises.equipment.toLocaleLowerCase().includes(search)
        ||exercises.bodyPart.toLocaleLowerCase().includes(search)
      )

      setSearch(" ");
      setexe(SearchedExe);
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: "44px", xs: "30px" } }} mb="50px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
              color: '#000',
              '&::placeholder': {
              color: '#999'
          }
            },
            width: { lg: "1100px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px"
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder='Search Exercises'
          type='text'
        />

        <Button className='search-btn'
          sx={{
            bgcolor: '#FF2625', color: '#fff', textTransform: 'none',
            width: { lg: '98x', xs: '80px' }, borderRadius: "5px", height: '56px', position: 'absolute', right: '0px',
            fontSize: { lg: '20px', xs: '14px' },
            '&:hover': {
              bgcolor: '#281a18'
            }
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{position:"relative", width:"100%", p: "20px"}}>
          <HorizontalScrollbar 
            data={bodyParts} 
            bodyPart={bodyPart} 
            setBodyPart={setBodyPart}
            isBodyParts/>
      </Box>

    
    </Stack>
  )
}

export default SearchExe
