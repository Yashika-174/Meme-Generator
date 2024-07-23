import './App.css';
import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Edit from './pages/Edit';

function App() {

  return (
    <div className='container' style={{display:'flex',justifyContent:'center',flexWrap:'wrap',alignItems:'center'}}>
      <h1>Meme Generator</h1>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/edit' element={<Edit/>}/>
      </Routes>
    </div>
  )
}

export default App
