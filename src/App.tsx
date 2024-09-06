import './App.css';
import '@mantine/core/styles.css';
import Homepage from './components/Homepage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  const theme = createTheme({
    breakpoints: {
      'xs': '320px',
      'sm': '476px',
      'md': '640px',
      'bs': '768px',
      'lg': '900px',
      'xl': '1024px',
      '2xl':'1280px',
    },
  });
  return (
    <MantineProvider >
      <Homepage />
    </MantineProvider>

  );
}

export default App;
