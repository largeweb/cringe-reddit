import logo from './logo.svg';
import bg from './images/bg-cr.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{position:"fixed",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundImage:`url(${bg})`,top:"0px",left:"0px",right:"0px",zIndex:"-1",bottom:"0px"}}></div>
      <div style={{position:"fixed",opacity:"0.3",top:"55%",left:"22.8%",width:"36%",height:"31%",zIndex:"1",background:"red"}}>hello</div>
      <div style={{position:"fixed",opacity:"0.3",top:"22.6%",left:"3.6%",width:"17.8%",height:"77.4%",zIndex:"1",background:"red"}}>hello</div>
      <div style={{position:"fixed",opacity:"0.3",top:"50.6%",left:"60.2%",width:"20.9%",height:"38.5%",zIndex:"1",background:"red"}}>hello</div>
      <div style={{position:"fixed",opacity:"0.3",top:"18.4%",left:"60.2%",width:"20.9%",height:"29.8%",zIndex:"1",background:"red"}}>hello</div>
    </div>
  );
}

export default App;
