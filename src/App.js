import logo from './logo.svg';
import './App.css';
var style ={
  color: 'green',
  fontSize: '50px',
  fontWeight: 700,
}
function App() {
  var name ="Sadia";
  var bonous =4000;
  var  person1 ={
      firstName:"Hasan",
      lastName:"Ali",
      Salary: 10000,
    };
  

  return (
    <div className="App">
      <header className="App-header">
        <p style={style}>hello my dear {name}</p>

        <h3 style={{color:'yellow'}}>I am Mahmudul, I realy love you, I don't know what do you think about me but I know you love me but some confusion have in your mind. dear {name} don't worry I'm only for you.</h3>
        <h2>your name is {person1.firstName +" "+ person1.lastName}</h2>
        <p>Your Salary is: {person1.Salary+bonous}</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
    
  );
}

function Person(){
  const personStyle = {
    border:'2px solid red',
    margin:'10px',
    padding:'10px'
  }
  return ( 
    <div style={personStyle}>
      <h1 >Start Work with React</h1>
      <h3>2nd day of react</h3>
    </div>
  )
}

export default App;
