import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function AboutMe(props) {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      maxWidth: '1300px',
      height: 'auto',
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      borderRadius: '24px',
      boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)",
      overflow: 'hidden',
      margin: '0 auto',
      padding: '40px'
    }}>
      <Box 
        component="h1"
        sx={{
          textAlign: "center",
          width: '100%',
          fontSize: "36px",
          fontWeight: "700",
          margin: "0 0 20px 0",
          color: "#ffffff",
          fontFamily: "'Poppins', sans-serif",
          letterSpacing: "3px",
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60px',
            height: '3px',
            background: '#ffd700',
            borderRadius: '2px'
          }
        }}
      >
        ABOUT ME
      </Box>
      
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'flex-start',
        gap: '30px'
      }}>
        <Box sx={{ 
          flex: 1,
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '16px',
          padding: '30px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}>
          <Typography sx={{  
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            lineHeight: '1.7',
            color: '#2c3e50',
            fontWeight: '400'
          }}>
            Hello, I am Sofia Lebowitz. I’m from McLean, Virginia and I'm currently studying Communications in the college of Arts, Media and Design at Northeastern University. 

I have a passion for the food industry and this summer I had the opportunity to go to Italy to work in a high end, farm to table restaurant, Organika, for Chef Francesco Bucalleti. 

For the last two years I have worked as a manager for Artisan Confections, where I get to make chocolates and gelato!

Aside from my food industry experience I love to travel, read and spend time with friends and family. Thanks for stopping by!
          </Typography>
        </Box>
        
        <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Button 
            href="https://www.linkedin.com/in/sofialebowitz" 
            target="_blank"
            sx={{
              background: '#0077b5',
              borderRadius: '8px',
              width: '60px',
              height: '60px',
              minWidth: '60px',
              padding: 0,
              boxShadow: '0 4px 12px rgba(0, 119, 181, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(0, 119, 181, 0.4)',
                background: '#005885'
              }
            }}
          >
            <LinkedInIcon sx={{ 
              fontSize: 32, 
              color: '#ffffff'
            }}/> 
          </Button>
        </Box>
      </Box>
    </Box>
  );
}