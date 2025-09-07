import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function AboutMe(props) {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      width: '100%',
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      borderRadius: '16px',
      boxShadow: "0 20px 40px rgba(102, 126, 234, 0.3)",
      overflow: 'hidden',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        zIndex: 1
      }
    }}>
      <Box 
        component="h1"
        sx={{
          textAlign: "center",
          width: '100%',
          fontSize: "42px",
          fontWeight: "700",
          margin: "32px 0 24px",
          color: "#ffffff",
          fontFamily: "'Poppins', sans-serif",
          letterSpacing: "2px",
          textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          position: 'relative',
          zIndex: 2,
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60px',
            height: '4px',
            background: 'linear-gradient(90deg, #ffd89b, #19547b)',
            borderRadius: '2px'
          }
        }}
      >
        ABOUT ME
      </Box>
      
      <Box sx={{ 
        display: 'flex', 
        width: '100%', 
        padding: '0 32px 32px',
        position: 'relative',
        zIndex: 2,
        alignItems: 'flex-start',
        gap: '24px'
      }}>
        <Box sx={{ 
          flex: 1,
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          <Typography sx={{ 
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            lineHeight: '1.8',
            color: '#2c3e50',
            fontWeight: '400',
            '& p': {
              marginBottom: '16px'
            }
          }}>
            <Box component="p" sx={{ marginBottom: '16px', fontSize: '18px', fontWeight: '500' }}>
              Hello, I am Sofia Lebowitz. I'm from McLean, Virginia and I'm currently studying Communications in the college of Arts, Media and Design at Northeastern University.
            </Box>
            
            <Box component="p" sx={{ marginBottom: '16px' }}>
              I have a passion for the food industry and this summer I had the opportunity to go to Italy to work in a high end, farm to table restaurant, Organika, for Chef Francesco Bucalleti.
            </Box>
            
            <Box component="p" sx={{ marginBottom: '16px' }}>
              For the last two years I have worked as a manager for Artisan Confections, where I get to make chocolates and gelato!
            </Box>
            
            <Box component="p" sx={{ marginBottom: 0, fontStyle: 'italic', color: '#34495e' }}>
              Aside from my food industry experience I love to travel, read and spend time with friends and family. Thanks for stopping by!
            </Box>
          </Typography>
        </Box>
        
        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Button 
            href="https://www.linkedin.com/in/sofialebowitz" 
            target="_blank"
            sx={{
              background: 'linear-gradient(45deg, #0077b5, #00a0dc)',
              borderRadius: '50%',
              minWidth: '80px',
              minHeight: '80px',
              padding: 0,
              boxShadow: '0 8px 20px rgba(0, 119, 181, 0.4)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 30px rgba(0, 119, 181, 0.6)',
                background: 'linear-gradient(45deg, #005885, #0077b5)'
              }
            }}
          >
            <LinkedInIcon sx={{ 
              fontSize: 48, 
              color: '#ffffff'
            }}/> 
          </Button>
        </Box>
      </Box>
    </Box>
  );
}