
import './App.scss';
import NavBar from './components/NavBar/NavBar';


function App() {
const styleApp = {padding:'10px 20px',margin: 10, }
  return (
    //JSX
    <div className="container" style= {styleApp}>
          <NavBar />
         <h1>Hola </h1>
    </div>
  );
}

export default App;
