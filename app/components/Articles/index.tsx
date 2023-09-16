import { WidthFull } from '@mui/icons-material';
import './index.css';
import {Box,Typography,Button,Paper} from '@mui/material';
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const Articles=()=>{
    return(
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",mt:10}}>
            <Box sx={{display:"flex",
            justifyContent:"center",
            width:"1440px",
            height:"160px",
            flexShrink:0,
            backgroundColor:"#220D4E",
           }}>
                <Typography variant='h1' sx={{
                    fontFamily:"Poppins",
                    fontSize:"24px",
                    textAlign:"center",
                    color:"#fff",
                    fontStyle:"normal",
                    fontWeight:"700px",
                    lineHeight:"33px",
                    pr:2,
                    pt:5
                }}>Open your Account Today {' '} <br/> <span className='name'>Let's take the next step together</span></Typography>
                <div className="background-image" style={{
                    width: "282.333px",
                    height: "266px",
                    background: `url(https://res.cloudinary.com/devj4jofj/image/upload/v1694862409/boy_and_girl_working_on_computer_sxadpk.jpg), lightgray 50% / contain no-repeat`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    position:"inherit",
                }}></div>
                <Button className='button' sx={{ml:2,
                    width:"170px",
                    height:"49px", 
                    borderRadius:50, 
                    backgroundColor:"#D92365", 
                    mt:5,
                    boxShadow:"0px 2px 10px 0px rgba(0, 0, 0, 0.14)"
                    }}><Typography variant='h1'
                    sx={{color:"#F2F2F2", 
                    width:"146px",
                    height:"21px",
                    fontFamily:"Poppins", 
                    textAlign:"center",
                    fontSize:"14px",
                    fontStyle:"normal",
                    fontWeight:600,
                    lineHeight:"normal",
                    textTransform:"uppercase"}}>OPEN AN ACCOUNT</Typography></Button>
            </Box>
              <Typography variant='h1' sx={{
                    fontFamily:"Poppins",
                    fontSize:"24px",
                    textAlign:"center",
                    color:"#220D4E",
                    fontStyle:"normal",
                    fontWeight:"600px",
                    lineHeight:"34px",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    width:"92px",
                    height:"37.126px",
                    flexShrink:0,
                    pt:20
                }}>Articles</Typography>
                <Typography variant='h6' sx={{
                    fontFamily:"Poppins",
                    fontSize:"32px",
                    textAlign:"center",
                    color:"var(--N1, #0A1023)",
                    fontStyle:"normal",
                    fontWeight:"700px",
                    lineHeight:"45px",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    flexShrink:0,
                    pt:2
                }}>Stay Updated</Typography>
                <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                <Paper sx={{
                    width:"320px",
                    height:"418px",
                    flexShrink:0,
                    borderRadius:"3px",
                    background:"#f2f2f2",
                    mt:5,
                    display:"flex",
                    flexDirection:"column",
                    mr:5
                }}>
                <div style={{
                    width: "320px",
                    height: "169px",
                    borderRadius:"3px",
                    background: `url(https://res.cloudinary.com/devj4jofj/image/upload/v1694867131/Rectangle_2619_hpqagh.jpg), lightgray 50% / contain no-repeat`,
                    backgroundSize: "cover",
                }}>
                    <Button className='button' sx={{mt:7,
                    width:108,
                    height:30, 
                    borderRadius:3, 
                    backgroundColor:"#D92365", 
                    mt:19
                    }}><Typography variant='h1'
                    sx={{color:"#F2F2F2", 
                    fontFamily:"Poppins", 
                    fontSize:"16px",
                    fontStyle:"normal",
                    fontWeight:500,
                    lineHeight:"30px",
                    width:"95.538px",
                    }}>Investment</Typography></Button>
                </div>
                <Typography variant='h2' sx={{
                    fontFamily:"Poppins",
                    fontSize:"16px",
                    textAlign:"center",
                    color:"#000",
                    fontStyle:"normal",
                    fontWeight:"500px",
                    lineHeight:"30px",
                    flexShrink:0,
                    pt:2,
                    width:"299px"
                }}>Investment Tips for Short Term, Mid Term & Long Term Goals</Typography>
                <Typography variant='h6' sx={{
                    fontFamily:"Poppins",
                    fontSize:"14px",
                    color:"var(--N2, #2C3655)",
                    fontStyle:"normal",
                    fontWeight:"400px",
                    lineHeight:"22px",
                    display:"flex",
                    justifyContent:"center",
                    flexShrink:0,
                    pt:2,
                }}>Post By Hans Murazi {' '} <span style={{
                    color:"var(--N2, #2C3655)",
                    fontFamily:"Poppins",
                    fontSize:"14px",
                    fontStyle:"normal",
                    fontWeight:"400px",
                    lineHeight:"22px",
                    paddingLeft:"60px"
                }}>05 Feb 2022</span></Typography>
                <Typography variant='h6' sx={{
                    fontFamily:"Poppins",
                    fontSize:"14px",
                    color:"#000",
                    fontStyle:"normal",
                    fontWeight:"300px",
                    lineHeight:"normal",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    width:"298px",
                    height:"63px",
                    flexShrink:0,
                    pt:2,
                    pl:2
                }}>There are no shortcuts to financial success. One of the few straightforward rules for making.</Typography>
                <Box sx={{
                    display:"flex",
                    p:2
                }}>
                    <Typography variant='h2' sx={{
                    fontFamily:"Poppins",
                    fontSize:"14px",
                    color:" #220D4E",
                    fontStyle:"normal",
                    fontWeight:"500px",
                    lineHeight:"normal",
                    flexShrink:0,
                }}>Read More</Typography>
                <FaLongArrowAltRight className="arrow"/>
                </Box>
                </Paper>
                <Paper sx={{
                    width:"320px",
                    height:"418px",
                    flexShrink:0,
                    borderRadius:"3px",
                    background:"#f2f2f2",
                    mt:5,
                    display:"flex",
                    flexDirection:"column",
                    mr:5
                }}>
                <div style={{
                    width: "320px",
                    height: "169px",
                    borderRadius:"3px",
                    background: `url(https://res.cloudinary.com/devj4jofj/image/upload/v1694867131/Rectangle_2619_hpqagh.jpg), lightgray 50% / contain no-repeat`,
                    backgroundSize: "cover",
                }}>
                    <Button className='button' sx={{mt:7,
                    width:108,
                    height:30, 
                    borderRadius:3, 
                    backgroundColor:"#D92365", 
                    mt:19
                    }}><Typography variant='h1'
                    sx={{color:"#F2F2F2", 
                    fontFamily:"Poppins", 
                    fontSize:"16px",
                    fontStyle:"normal",
                    fontWeight:500,
                    lineHeight:"30px",
                    width:"95.538px",
                    }}>Investment</Typography></Button>
                </div>
                <Typography variant='h2' sx={{
                    fontFamily:"Poppins",
                    fontSize:"16px",
                    textAlign:"center",
                    color:"#000",
                    fontStyle:"normal",
                    fontWeight:"500px",
                    lineHeight:"30px",
                    flexShrink:0,
                    pt:2,
                    width:"299px"
                }}>Investment Tips for Short Term, Mid Term & Long Term Goals</Typography>
                <Typography variant='h6' sx={{
                    fontFamily:"Poppins",
                    fontSize:"14px",
                    color:"var(--N2, #2C3655)",
                    fontStyle:"normal",
                    fontWeight:"400px",
                    lineHeight:"22px",
                    display:"flex",
                    justifyContent:"center",
                    flexShrink:0,
                    pt:2,
                }}>Post By Hans Murazi {' '} <span style={{
                    color:"var(--N2, #2C3655)",
                    fontFamily:"Poppins",
                    fontSize:"14px",
                    fontStyle:"normal",
                    fontWeight:"400px",
                    lineHeight:"22px",
                    paddingLeft:"60px"
                }}>05 Feb 2022</span></Typography>
                <Typography variant='h6' sx={{
                    fontFamily:"Poppins",
                    fontSize:"14px",
                    color:"#000",
                    fontStyle:"normal",
                    fontWeight:"300px",
                    lineHeight:"normal",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    width:"298px",
                    height:"63px",
                    flexShrink:0,
                    pt:2,
                    pl:2
                }}>There are no shortcuts to financial success. One of the few straightforward rules for making.</Typography>
                <Box sx={{
                    display:"flex",
                    p:2
                }}>
                    <Typography variant='h2' sx={{
                    fontFamily:"Poppins",
                    fontSize:"14px",
                    color:" #220D4E",
                    fontStyle:"normal",
                    fontWeight:"500px",
                    lineHeight:"normal",
                    flexShrink:0,
                }}>Read More</Typography>
                <FaLongArrowAltRight className="arrow"/>
                </Box>
                </Paper>
                <Paper sx={{
                    width:"320px",
                    height:"418px",
                    flexShrink:0,
                    borderRadius:"3px",
                    background:"#f2f2f2",
                    mt:5,
                    display:"flex",
                    flexDirection:"column"
                }}>
                <div style={{
                    width: "320px",
                    height: "169px",
                    borderRadius:"3px",
                    background: `url(https://res.cloudinary.com/devj4jofj/image/upload/v1694867131/Rectangle_2619_hpqagh.jpg), lightgray 50% / contain no-repeat`,
                    backgroundSize: "cover",
                }}>
                    <Button className='button' sx={{mt:7,
                    width:108,
                    height:30, 
                    borderRadius:3, 
                    backgroundColor:"#D92365", 
                    mt:19
                    }}><Typography variant='h1'
                    sx={{color:"#F2F2F2", 
                    fontFamily:"Poppins", 
                    fontSize:"16px",
                    fontStyle:"normal",
                    fontWeight:500,
                    lineHeight:"30px",
                    width:"95.538px",
                    }}>Investment</Typography></Button>
                </div>
                <Typography variant='h2' sx={{
                    fontFamily:"Poppins",
                    fontSize:"16px",
                    textAlign:"center",
                    color:"#000",
                    fontStyle:"normal",
                    fontWeight:"500px",
                    lineHeight:"30px",
                    flexShrink:0,
                    pt:2,
                    width:"299px"
                }}>Investment Tips for Short Term, Mid Term & Long Term Goals</Typography>
                <Typography variant='h6' sx={{
                    fontFamily:"Poppins",
                    fontSize:"14px",
                    color:"var(--N2, #2C3655)",
                    fontStyle:"normal",
                    fontWeight:"400px",
                    lineHeight:"22px",
                    display:"flex",
                    justifyContent:"center",
                    flexShrink:0,
                    pt:2,
                }}>Post By Hans Murazi {' '} <span style={{
                    color:"var(--N2, #2C3655)",
                    fontFamily:"Poppins",
                    fontSize:"14px",
                    fontStyle:"normal",
                    fontWeight:"400px",
                    lineHeight:"22px",
                    paddingLeft:"60px"
                }}>05 Feb 2022</span></Typography>
                <Typography variant='h6' sx={{
                    fontFamily:"Poppins",
                    fontSize:"14px",
                    color:"#000",
                    fontStyle:"normal",
                    fontWeight:"300px",
                    lineHeight:"normal",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    width:"298px",
                    height:"63px",
                    flexShrink:0,
                    pt:2,
                    pl:2
                }}>There are no shortcuts to financial success. One of the few straightforward rules for making.</Typography>
                <Box sx={{
                    display:"flex",
                    p:2
                }}>
                    <Typography variant='h2' sx={{
                    fontFamily:"Poppins",
                    fontSize:"14px",
                    color:" #220D4E",
                    fontStyle:"normal",
                    fontWeight:"500px",
                    lineHeight:"normal",
                    flexShrink:0,
                }}>Read More</Typography>
                <FaLongArrowAltRight className="arrow"/>
                </Box>
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

export default Articles;