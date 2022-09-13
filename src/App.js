import './assets/css/App.css';
import './assets/css/index.css';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
 
  const name = JSON.parse(localStorage.getItem('name'));

  return (
      <div className="App">
       
       {
        name === null ||  name.length <= 0 ? 
       (
        <Login />
      ) : (
        <Main />
         )}
    </div>

  )
  
      }
export default App;
