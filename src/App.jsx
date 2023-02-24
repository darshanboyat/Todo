import { Routes, Route } from 'react-router-dom'
import Home from './Components/Dashboard'
import List from './Components/List'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  AOS.init();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo-list" element={<List />} />
      </Routes>
    </>
  )
}