import './App.css';
import {Route,Routes } from 'react-router-dom'
import AddItem from './pages/admin/AddItem';
function App() {
  return (
   <Routes>
    <Route path='/' element={<AddItem/>} />
   </Routes>
  );
}

export default App;
