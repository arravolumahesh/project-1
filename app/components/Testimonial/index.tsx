import './index.css';
import {Box,Typography,Paper} from '@mui/material';
import { BsFillStarFill } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const Testimonial=()=>{
    return(
        <Box className="testimonial-container" sx={{width:"1440px",height:"500px",mt:15, textAlign:"center"}}>
            <Typography className='testimonial-heading' variant='h6' sx={{
                color:"#232073",
                textAlign:"center",
                fontFamily:"Poppins",
                fontSize:"24px",
                fontStyle:"normal",
                fontWeight:"600px",
                lineHeight:"31px"
            }}>Testimonials</Typography>
            <Typography className='testimonial-heading-1' variant='h4' sx={{
                color:"var(--N1, #0A1023)",
                textAlign:"center",
                fontFamily:"Poppins",
                fontSize:"32px",
                fontStyle:"normal",
                fontWeight:"700px",
                lineHeight:"31px",
                display:"felx",
                flexDirection:"column",
                width:"660px",
                height:"76px",
                flexShrink:0,
                ml:50,
                pt:2
            }}> WE ARE ONLY AS GOOD AS OUR CLIENT SAY WE ARE</Typography>
            <Box className='paper-box' sx={{display:"flex",justifyContent:"center"}}>
                <Paper className='paper-1' sx={{display:"flex", 
                flexDirection:"column",
                width:"320px",
                height:"204px",
                flexShrink:0,
                borderRadius:"3px",
                background:"#fff",
                mt:5,
                boxShadow:"0px 2px 25px 0px rgba(0, 0, 0, 0.21)" }} elevation={3}>
            <div className='stars-container'>           
                <BsFillStarFill className="stars"/>
                <BsFillStarFill className="stars"/>
                <BsFillStarFill className="stars"/>
                <BsFillStarFill className="stars"/>
                <BsFillStarFill className="stars"/>
            </div>     
            <Typography className='new-header' variant="body1" sx={{
                width:"280px",
                color:"#000",
                fontFamily:"Poppins",
                fontSize:"24px",
                fontStyle:"normal",
                fontWeight:"400px",
                lineHeight:"34px",
                p:2
            }}>“ I am Very Happy With New Platform “</Typography>
            <Typography className='name-header' variant="body1" sx={{
                width:"280px",
                color:"#000",
                fontFamily:"Poppins",
                fontSize:"24px",
                fontStyle:"normal",
                fontWeight:"400px",
                lineHeight:"34px",
                textAlign:"end"
            }}>Rajesh H.</Typography>
        </Paper>
        <Paper className='paper-2' sx={{display:"flex", 
                flexDirection:"column",
                width:"320px",
                height:"204px",
                flexShrink:0,
                borderRadius:"3px",
                background:"#fff",
                mt:5,
                ml:5,
                boxShadow:"0px 2px 25px 0px rgba(0, 0, 0, 0.21)" }} elevation={3}>
            <div className='stars-container'>           
                <BsFillStarFill className="stars"/>
                <BsFillStarFill className="stars"/>
                <BsFillStarFill className="stars"/>
                <BsFillStarFill className="stars"/>
                <BsFillStarFill className="stars"/>
            </div>     
            <Typography className='new-header' variant="body1" sx={{
                width:"280px",
                color:"#000",
                fontFamily:"Poppins",
                fontSize:"24px",
                fontStyle:"normal",
                fontWeight:"400px",
                lineHeight:"34px",
                p:2
            }}>“ I am Very Happy With New Platform “</Typography>
            <Typography className='name-header' variant="body1" sx={{
                width:"280px",
                color:"#000",
                fontFamily:"Poppins",
                fontSize:"24px",
                fontStyle:"normal",
                fontWeight:"400px",
                lineHeight:"34px",
                textAlign:"end"
            }}>Rajesh H.</Typography>
        </Paper>
        <Paper className='paper-3' sx={{display:"flex", 
                flexDirection:"column",
                width:"320px",
                height:"204px",
                flexShrink:0,
                borderRadius:"3px",
                background:"#fff",
                mt:5,
                ml:5,
                boxShadow:"0px 2px 25px 0px rgba(0, 0, 0, 0.21)" }} elevation={3}>
            <div className='stars-container'>           
                <BsFillStarFill className="stars"/>
                <BsFillStarFill className="stars"/>
                <BsFillStarFill className="stars"/>
                <BsFillStarFill className="stars"/>
                <BsFillStarFill className="stars"/>
            </div>     
            <Typography className='new-header' variant="body1" sx={{
                width:"280px",
                color:"#000",
                fontFamily:"Poppins",
                fontSize:"24px",
                fontStyle:"normal",
                fontWeight:"400px",
                lineHeight:"34px",
                p:2
            }}>“ I am Very Happy With New Platform “</Typography>
            <Typography className='name-header' variant="body1" sx={{
                width:"280px",
                color:"#000",
                fontFamily:"Poppins",
                fontSize:"24px",
                fontStyle:"normal",
                fontWeight:"400px",
                lineHeight:"34px",
                textAlign:"end"
            }}>Rajesh H.</Typography>
        </Paper>
        </Box>
        <div className='pagination-container'>
        <BsChevronLeft className="left-arrow"/>
        <Typography sx={{width:"12px",height:"12px",borderRadius:"6px",background:"var(--N5, #BDC2D1)",mt:4,ml:2}}> </Typography>
        <Typography sx={{width:"12px",height:"12px",borderRadius:"6px",background:"var(--N5, #BDC2D1)",mt:4,ml:2}}> </Typography>
        <Typography sx={{width:"12px",height:"12px",borderRadius:"6px",background:"#00C2FF",mt:4,ml:2}}> </Typography>
        <BsChevronRight className="right-arrow"/>
        </div>
        </Box>
    )
}

export default Testimonial 