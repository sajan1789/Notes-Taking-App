import logo from './logo.svg';
import './App.css';
import MainRoutes from './Pages/MainRoutes';
import Login from './Pages/Login';
import Signup from './Pages/SignUp';
import AddNotes from './Pages/AddNotes';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      {/* <MainRoutes/> */}
      <Navbar/>
      {/* <AddNotes/> */}
      {/* <Login/> */}
      <Signup/>
    </div>
  );
}

export default App;
