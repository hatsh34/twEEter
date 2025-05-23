import {Routes, Route}  from 'react-router-dom';
import LoginPage from './pages/auth/login/LoginPage.jsx';
import SignUpPage from './pages/auth/signup/SignUpPage.jsx';
import HomePage from './pages/home/HomePage.jsx';

function App() {

  return (
    <div className='flex max-w-6xl mx-auto'>
      <Sidebar/> 
      <Routes>
        <Route path='/' element={ <HomePage/>}/>
        <Route path='/login' element={ <LoginPage/>}/>
        <Route path='/signup' element={ <SignUpPage/>}/>
      </Routes>
      <RightPanel/>
    </div>
  )
}

export default App
