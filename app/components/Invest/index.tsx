import { WidthFull } from '@mui/icons-material';
import './index.css';
import {Box,Typography,Button} from '@mui/material';

/*import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

*/


const Invest=()=>{
    const textStyle = {
        fontFamily: 'Poppins',
        fontSize: '44px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '51px',
        textTransform: 'uppercase',
        background: 'linear-gradient(90deg, #232073 52.7%, #D92365 85.57%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
      const perStyle = {
        fontFamily: 'Poppins',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: 300,
        lineHeight: '44px',
        textTransform: 'capitalize',
        background: 'linear-gradient(90deg, #D92365 26.96%, #232073 82.35%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
      const fdStyle = {
        fontFamily: 'Poppins',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: 300,
        lineHeight: '44px',
        textTransform: 'capitalize',
        background: 'linear-gradient(90deg, #232073 0%, #D92365 47.22%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
    return(
        <Box className="invest-container" sx={{display:"flex", flexDirection:"column", height:800, width:1440, background:"#F2F2F2"}}>
           <div className='img-container'>
            <div className='content'>
            <Typography className='heading' variant='h1' sx={{color:"#232073", 
            fontFamily:"Poppins", fontSize:44, 
            fontWeight:700, 
            textTransform:"uppercase",
            ml:8, mt:20}}>
            Watching your {' '} <span style={textStyle}>investment</span><br/> grow is so fulfiling
            </Typography>   
            
            <Typography variant='h1' sx={{color:"#220D4E", 
            fontFamily:"Poppins", fontSize:24, 
            fontWeight:300, 
            textTransform:"capitalize",
            lineHeight:"44px",
            ml:8, mt:5}}>
            Get Upto {' '} <span style={perStyle}> 9.10% P.A .* RETURNS WITH </span><br/> <span style={fdStyle}>COPPORATED fD</span> 
            </Typography>
            <Button className='button' sx={{mt:7,
              ml:8,
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
              textTransform:"capitalize"}}>Invest Now</Typography></Button>
              <div className='icon-container'>
              <svg xmlns="http://www.w3.org/2000/svg" width="112" height="16" viewBox="0 0 112 16" fill="none">
                  <circle cx="8" cy="8" r="8" fill="#220D4E" fill-opacity="0.2"/>
                  <circle cx="40" cy="8" r="8" fill="#220D4E"/>
                  <circle cx="72" cy="8" r="8" fill="#220D4E" fill-opacity="0.2"/>
                  <circle cx="104" cy="8" r="8" fill="#220D4E" fill-opacity="0.2"/>
                </svg>
                </div>
                </div> 
                </div>
            </Box> 
    ) 

  /*  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  ); */
}

export default Invest;