import { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Users from './components/users/Users';
import { users } from './users';
import User from './components/users/User';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users users={users} />} />
        <Route path="/users/:login" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
