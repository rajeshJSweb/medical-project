import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import About from './components/About/About';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Booking from './components/Booking/Booking';
import Doctors from './components/Doctors/Doctors';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Navbar/Header';
import Contacts from './components/Contacts/Contacts';
import Articles from './components/Articles/Articles';
import Error from './components/NotFound/Error';
import Services from './components/Services/Services';
import Details from './Details/Details';
import Specialist from './components/Specialist/Specialist';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header/>
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
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <Route exact path='/specialist'>
              <Specialist></Specialist>
            </Route>
            <PrivateRoute exact path="/doctor/:id">
              <Doctors></Doctors>
            </PrivateRoute>
            <Route exact path="/contact">
              <Contacts></Contacts>
            </Route>
            <PrivateRoute exact path="/articles">
              <Articles></Articles>
            </PrivateRoute>
            <Route exact path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
