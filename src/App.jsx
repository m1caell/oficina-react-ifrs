import Title from './components/Title.jsx';
import Image from './components/Image.jsx';
import Form from './components/form/Form.jsx';

import './App.css';

function App() {
  async function getImageFromCode(code) {
    const fetchResult = await fetch(`https://http.cat/${code}`);
    const result = await fetchResult.blob();

    console.log(result);
  }

  return (
    <div className="container">
      <header className="header">
        <Title>Dicionário do STATUS CODE</Title>
        <Form executeOnSubmit={getImageFromCode} />
      </header>
      <main className="main">
        <Image />
      </main>
    </div>
  );
}

export default App;
