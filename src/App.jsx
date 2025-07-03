import React, { useState } from 'react';
import WebHeader from './components/WebHeader';
import WebMain from './components/WebMain';
import WebFooter from './components/WebFooter';

const App = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className='flex flex-col justify-between items-center bg-black text-white w-screen h-screen'>
      <WebHeader onClick={() => setToggle(!toggle)} toggle={toggle} />
      <WebMain toggle={toggle} />
      <WebFooter />
    </div>
  );
};

export default App;
