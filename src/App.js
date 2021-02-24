import logo from './logo.svg';
import './App.css';

function App() {
  // const UserData = [{id : '455056', name:'mh murshed'},{id:'056', name:'md nahid ferdaus'}]
  
  const user =['md nahid ferdaos','mh murshed']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
             <Nahid name={user[0]}></Nahid>
             <Nahid name={user[1]}></Nahid>
              
      </header>
    </div>
  );
}

function Nahid(props){
       return(
           <div>
               <h1>All Data : {props.name}</h1>
               
           </div>
       )
}

export default App;
