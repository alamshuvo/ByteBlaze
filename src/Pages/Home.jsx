
import Hero from '../components/Hero/Hero';
import wave from '../assets/wave.svg'

const Home = () => {
    return (
        <div>
          
          <div className='flex relative  flex-col items-center justify-center min-h-[calc(100vh-150px)]'>
          <Hero></Hero>
          <img className='bottom-0 absolute w-full' src={wave} alt="" />
          </div>
            
            
           
            
            
            
        </div>
    );
};

export default Home;