import React from 'react'
import {Stack,Typography, Button} from "@mui/material"
import '../App.css'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    
    <Button
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px'
    } :
    { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={()=>{
      setBodyPart(item)
      window.scrollTo({top:1800, left:100, behavior:"smooth"})
    }}
>
      
    
     <Stack>
      <img src={Icon} alt='dumbbell' 
      style={{width: '80px', height: '80px'}} />
      <Typography fontSize="25px" fontWeight="bold" color="#3A1212" textTransform="capitalize"  alignItems="center"
      justifyContent="center">{item}</Typography>
    </Stack>

  </Button>
  )
}

export default BodyPart
