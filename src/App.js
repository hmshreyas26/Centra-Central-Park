import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';

function App() {
  return (

    <div className='grid-container'>
      <Header></Header>
      <Sidebar></Sidebar>
      <Home></Home>
      </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>my name is Shreyas H M
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
  );
}

export default App;
