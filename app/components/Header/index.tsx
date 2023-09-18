import React from 'react';
import './index.css'; 
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import Box from '@mui/material/Box';
import {Typography, Button} from '@mui/material';
import { wrap } from 'module';

const Header = () => {
  return (
    <Box className="header-container-1"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          width: '1440px', 
          height: 168,
          background: "#F2F2F2",
        },
      }}
    >
      <div className='bg-container'>
      <img alt="pic" className='logo' src="https://res.cloudinary.com/devj4jofj/image/upload/v1694692748/logo_1_pxaxbl.jpg"/>
      <Button className='search-btn' sx={{mt:7, 
        ml:10, 
        height:48, 
        width:400, 
        background:"#fff", 
        boxShadow:"0px 1px 16px 0px rgba(0, 0, 0, 0.14)",   
        borderRadius:50,
        }}><Typography variant='h1' className='search-name'
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
        <Box className='search-names'
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
    <button type='button' className='buttons'>Open An Account</button>
        <Typography className='lang' sx={{
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
        <Button className='hide-container' sx={{ ml:15, 
        mt:7,
        height:48, 
        width:85, 
        background:"#fff", 
        boxShadow:"0px 1px 16px 0px rgba(0, 0, 0, 0.14)",   
        borderRadius:50,}}>
          <AiOutlineMenu className="menu-burger"/>
        <AiOutlineUser className="logo-2"/>
        </Button>
    </div> 
      </Box>
  );
}

export default Header;