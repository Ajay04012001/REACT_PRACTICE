
import './App.css';
import Image from "./assets/IMG_0259.JPG";

function App() {
  const x = 10;
  var text;
  if (x===10){
    text = "equal";
  } else{
    text="not equal";
  }

    return(
    <div className="App">
    <h1 > Hello world</h1>
    <p>i am athma</p>
    <h2>{5+50}</h2> 
    <img src={Image} alt="pic"  width="400px" />
    <h3>{text}</h3>
    <h2>{x > 10 ? "greater" : "lesser"}</h2>
    </div>
);
  
}

export default App;
