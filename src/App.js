import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/Shared/Header/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import About from './components/About/About';
import AuthProvider from './AuthProvider/AuthProvider';
import Details from './Details/Details';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/registration">
            <Registration></Registration>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
            <PrivateRoute exact path="/details">
              <Details></Details>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
