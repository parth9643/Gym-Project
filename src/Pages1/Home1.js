import {React,useState} from 'react'
import { Box } from '@mui/material'
import Banner from '../Comp/Banner'
import SearchExe from '../Comp/SearchExe'
import Exercises from '../Comp/Exercises'


const Home1 = () => {
  const [bodyPart,setBodyPart]= useState('all')
  const[exercises,setexe]=useState([]); 
  console.log(bodyPart)
  return (

      <Box>
          <Banner/>
          
          <SearchExe 
            setexe={setexe} 
            bodyPart={bodyPart}
            setBodyPart={setBodyPart} 
          />

          <Exercises
            exercises={exercises} 
            bodyPart={bodyPart}
            setexe={setexe}
          />

      </Box>
  )
}

export default Home1
