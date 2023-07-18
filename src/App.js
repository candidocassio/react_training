import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'

function App() {

  const name = "Cássio";

  const newName = name.toUpperCase();

  function soma(a,b){
    return a + b;
  }

  const url = 'https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png'
  return (
    <div className="App">
      <h1>Olá REACT</h1>
      <p>Meu primeiro React APP</p>

      <p>Olá, {newName}</p>

      <p>Soma: {soma(2,2)}</p>

      <img src={url} alt="Minha Imagem" />

      <HelloWorld />

    </div>
  );
}

export default App;