import logo from './logo.svg';
import bg from './images/bg-cr.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{position:"fixed",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundImage:`url(${bg})`,top:"0px",left:"0px",right:"0px",bottom:"0px"}}></div>
      <div style={{top:"50%",left:"20%",width:"50%",background:"red"}}>hello</div>
    </div>
  );
}

export default App;
