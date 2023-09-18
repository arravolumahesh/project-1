import Image from 'next/image'
import Header from './components/Header';
import Invest from './components/Invest';
import Service from './components/Service';
import Trading from './components/Trading';
import Testimonial from './components/Testimonial'; 
import Awards from './components/Awards';
import 'bootstrap/dist/css/bootstrap.min.css';
import Articles from './components/Articles';

export default function Home() {
  return (
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
