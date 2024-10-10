
import Header from './components/Header';
import Video from './components/Video';
import Hero from './components/Hero';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
const App = () =>
{
  return (
    <div>
      <Header />
      <Video />
      <Hero />

    </div>
  )
}

export default App
