import Navbar1 from './Comp/Navbar1';
import Footer1 from './Comp/Footer1';
//import './App.css';
import ExeDetail from './Pages1/ExeDetail';
import Home1 from './Pages1/Home1';
import { BrowserRouter,Routes,Route
 } from 'react-router-dom';
import { Box } from '@mui/material';


function App() {
  return (
    <div>
    <Box width="400px" sx={{width: {xl: "1488px"}}} m="auto">
      <Navbar1/>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home1/>}/>
           <Route path="/exercises/:id" element={<ExeDetail/>} /> 
          </Routes>
      </BrowserRouter>
      <Footer1/>
    </Box>
  </div>

  );
}

export default App;
