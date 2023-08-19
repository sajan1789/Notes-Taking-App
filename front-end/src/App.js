import logo from './logo.svg';
import './App.css';
import MainRoutes from './Pages/MainRoutes';
import Login from './Pages/Login';
import Signup from './Pages/SignUp';
import AddNotes from './Pages/AddNotes';

function App() {
  return (
    <div className="App">
      {/* <MainRoutes/> */}
      <AddNotes/>
    </div>
  );
}

export default App;
