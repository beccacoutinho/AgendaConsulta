import { Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Cadastro from './pages/cadastro';
const Main = () => {
return (         
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/cadastro' element={<Cadastro/>} />
  </Routes>
);
}
export default Main;