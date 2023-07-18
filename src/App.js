import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase'


function App() {

  const name = "VARIAVEL const";

  const newName = name.toUpperCase();

  function soma(a,b){
    return a + b;

  }
  const url = 'https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png'



  return (
    <div className="App">

      <h1>Testando CSS</h1>
      <SayMyName nome= "Cássio"/>
      <SayMyName nome="Marcos"/>
      <SayMyName nome={name}/>

      <Pessoa 
        nome="Cássio - 02" 
        idade="26" 
        profissao="Desenvolvedor" 
        foto="https://via.placeholder.com/150"
      />

      <Frase/>
    </div>
  );
}

export default App;