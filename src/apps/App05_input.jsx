import { useState } from 'react';
import './App.css';
import CardInput from '../components/CardInput';
import CardInput2 from '../components/CardInput2';

function App() {

  return (
    <div>
      <CardInput name={'제임스'} />
      <br />
      <CardInput2/>
    </div>
  );
}

export default App;
