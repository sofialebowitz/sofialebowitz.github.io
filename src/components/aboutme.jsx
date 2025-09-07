import React from 'react';
import { Box, Button,Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function AboutMe(props) {
  

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Box 
        component="h1"
        sx={{
            width:'100%',
          fontSize: "36px",
          fontWeight: "bold",
          margin: "16px 0 8px",
          color: "#2d2e32",
          fontFamily: 'Delius' ,
           padding: '5px'
        }}
      >
        About Me!
      </Box>
      <Box sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{ width: '80%' }}>
    <Typography sx={{ padding: '5px',fontFamily: 'Delius' }}>
        {/* About me text */}
        Hello, I am Sofia Lebowitz. I am from McLean, Virginia and I'm currently studying Communications in the college of Arts, Media and Design at Northeastern University. I have a passion for food and am interested in the intersection of the food industry and communications. I am currently seeking Co-Op or internship opportunities. 
        <br /><br />If you know of any positions that you think would be a good fit, please reach out and I'd love to connect!
    </Typography>
    </Box>
    <Box sx={{ width: '15%' }}>
        <Button href="https://www.linkedin.com/in/sofialebowitz" target="_blank">
        <LinkedInIcon sx={{ fontSize: 70 }}/> 

            </Button>

        </Box>
        </Box>
     
    </Box>
  );
}
