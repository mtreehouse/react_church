import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import Info  from './component/Info';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Welcome />
        <Routes>
          <Route path="/" element={<Hello />}/>
          <Route path="/info" element={<Info />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
