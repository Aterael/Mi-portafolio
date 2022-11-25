import './App.css';
import Header from './components/header';
import Info from './components/info';
import Tecnologias from './components/tecnologias';
import Proyectos from './components/proyectos';
import Footer from './components/footer';
import Bienvenidos from './components/bienvenidos';

function App() {
  return (
    <div className="App">
      <Header/>
      <Bienvenidos/>
      <Info/>
      <Proyectos/>
      <Tecnologias/>
      <Footer/>
    </div>
  );
}

export default App;
