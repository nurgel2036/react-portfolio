import './index.scss';
import OutFlipImg from './components/FlipImg/FlipImg'
import Accardion from './components/Accardion/Accardion';
import HelpField from './components/HelpField/HelpField';
import  Carousel  from './components/CarouselBaige/Carousel';

function App() {
  return (
    <div className='App'>
      <OutFlipImg/>
      <Accardion/>
      <HelpField/>
      <Carousel/>
    </div>
  );
}

export default App;
