import Title from './components/Title.jsx';
import Image from './components/Image.jsx';
import Form from './components/form/Form.jsx';

import './App.css';
import { useState } from 'react';

function App() {
  const [srcImage, setSrcImage] = useState('');

  async function getImageFromCode(code) {
    if (code) {
      setSrcImage(`https://http.cat/${code}`);
    } else {
      setSrcImage('https://via.placeholder.com/400');
    }
  }

  return (
    <div className="container">
      <header className="header">
        <Title>Dicionário do STATUS CODE</Title>
        <Form executeOnSubmit={getImageFromCode} />
      </header>
      <main className="main">
        <Image src={srcImage} />
      </main>
    </div>
  );
}

export default App;
