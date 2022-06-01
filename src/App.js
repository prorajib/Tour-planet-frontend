import logo from './logo.svg';
import HomePage from './components/Home/HomePage/HomePage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import AddNewBooking from './components/AddNewBooking/AddNewBooking';
import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useRoutes,
} from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';
import PlaceOrder from './components/Home/PlaceOrder/PlaceOrder';
import MyBookings from './components/MyBookings/MyBookings';
import ManageBooking from './components/ManageBooking/ManageBooking';

function App() {
  return (
    <div className='App'>
      <></>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/about' element={<About></About>} />
          <Route path='/contact' element={<Contact></Contact>} />
          <Route
            path='/addbooking'
            element={
              <RequireAuth>
                <AddNewBooking></AddNewBooking>
              </RequireAuth>
            }
          ></Route>
          <Route
            path='/mybooking'
            element={
              <RequireAuth>
                <MyBookings></MyBookings>
              </RequireAuth>
            }
          ></Route>
          <Route
            path='/managebooking'
            element={
              <RequireAuth>
                <ManageBooking></ManageBooking>
              </RequireAuth>
            }
          ></Route>

          <Route
            path='/placeorder/:id'
            element={
              <RequireAuth>
                <PlaceOrder></PlaceOrder>
              </RequireAuth>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
