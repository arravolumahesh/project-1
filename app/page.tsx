import Image from 'next/image'
import {Box} from '@mui/material';
import Header from './components/Header';
import Invest from './components/Invest';
import Service from './components/Service'
import Trading from './components/Trading';
import Testimonial from './components/Testimonial';
import Awards from './components/Awards';
import Articles from './components/Articles';

export default function Home() {
  return (
   /* <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Box sx={{display:"flex",flexDirection:"column", width:1440, height:800, background:"#F2F2F2"}}>
      <Header/>
      <Invest/>
      </Box>
    </main> */

    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Header/>
    <Invest/>
    <Service/>
    <Trading/>
    <Testimonial/>
    <Awards/>
    <Articles/>
    </main>
    </>
  )
}
