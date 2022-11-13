import React,{ useState } from 'react';
import Button from './components/UI/Button';

import './App.css';

function App() {

  const [showParagraph,setShowParagraph] = useState(false);

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) =>!prevShowParagraph );
  }

  return (
    <div className='app'>
      <h2>Hi There</h2>
      {showParagraph && <p>This is new!!</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!!</Button>
    </div>
  );
}

export default App;
