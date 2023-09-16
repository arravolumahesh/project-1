import React from 'react';
import './index.css'; 
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import Box from '@mui/material/Box';
import {Typography, Button} from '@mui/material';
import { wrap } from 'module';

const Header = () => {
  return (
    <Box className="header-container-1"
      sx={{
        display: 'flex',
        flexWrap:'wrap',
        '& > :not(style)': {
          width: 1440,
          height: 168,
          background: "#F2F2F2",
        },
      }}
    >
      <div className='bg-container'>
      <img alt="pic" className='logo' src="https://res.cloudinary.com/devj4jofj/image/upload/v1694692748/logo_1_pxaxbl.jpg"/>
        
      <Button sx={{mt:7, 
        ml:10, 
        height:48, 
        width:400, 
        background:"#fff", 
        boxShadow:"0px 1px 16px 0px rgba(0, 0, 0, 0.14)",   
        borderRadius:50,
        }}><Typography variant='h1'
        color="rgba(13, 13, 13, 0.56)"
        align="center"
        fontFamily="Inter"
        fontSize="16px"
        fontStyle="normal"
        fontWeight={400}
        lineHeight="normal"
        textTransform="capitalize"
      >
        How{' '} 
        <Box
          component="span"
          color="rgba(13, 13, 13, 0.56)"
          fontFamily="Inter"
          fontSize="16px"
          fontStyle="normal"
          fontWeight={400}
          lineHeight="normal"
          textTransform="lowercase"
        >
          may i help you
        </Box>
        </Typography>
        <BiSearchAlt2 className="logo-1"/>
    </Button>
    <Button className='button' sx={{mt:7,
        ml:10,
        width:176,
        height:48, 
        borderRadius:50, 
        backgroundColor:"#D92365", 
        boxShadow:"0px 2px 10px 0px rgba(0, 0, 0, 0.14)"}}><Typography variant='h1'
        sx={{color:"#F2F2F2", 
        fontFamily:"Poppins", 
        textAlign:"center",
        fontSize:14,
        fontStyle:"normal",
        fontWeight:600,
        lineHeight:"normal",
        textTransform:"uppercase"}}>OPEN AS ACCOUNT</Typography></Button>
        <Typography sx={{
            color:"#0D0D0D",
            fontFamily:"Poppins",
            fontSize:16,
            textAlign:"center",
            fontSizeAdjust:16,
            fontStyle:"normal",
            fontWeight:600,
            lineHeight:"normal",
            mt:8,
            ml:10
        }}variant="caption">IN|ENG ^</Typography>
        <Button sx={{ ml:15, 
        mt:7,
        height:48, 
        width:85, 
        background:"#fff", 
        boxShadow:"0px 1px 16px 0px rgba(0, 0, 0, 0.14)",   
        borderRadius:50,}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_29_7249)">
    <path d="M15.3333 7.33301H0.666667C0.298477 7.33301 0 7.63149 0 7.99968C0 8.36787 0.298477 8.66635 0.666667 8.66635H15.3333C15.7015 8.66635 16 8.36787 16 7.99968C16 7.63149 15.7015 7.33301 15.3333 7.33301Z" fill="#0D0D0D"/>
    <path d="M15.3333 2.66699H0.666667C0.298477 2.66699 0 2.96547 0 3.33366C0 3.70185 0.298477 4.00032 0.666667 4.00032H15.3333C15.7015 4.00032 16 3.70185 16 3.33366C16 2.96547 15.7015 2.66699 15.3333 2.66699Z" fill="#0D0D0D"/>
    <path d="M15.3333 12H0.666667C0.298477 12 0 12.2985 0 12.6667C0 13.0349 0.298477 13.3333 0.666667 13.3333H15.3333C15.7015 13.3333 16 13.0349 16 12.6667C16 12.2985 15.7015 12 15.3333 12Z" fill="#0D0D0D"/>
  </g>
  <defs>
    <clipPath id="clip0_29_7249">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
        <AiOutlineUser className="logo-2"/>
        </Button>
    </div> 
      </Box>
  );
}

export default Header;
