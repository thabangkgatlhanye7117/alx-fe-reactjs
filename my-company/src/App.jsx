import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/About.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Navbar from './Navbar'

const App = () => {

return(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
              <Route index element={<Home/>}/>
              <Route path='about' element={<About/>}/>
              <Route path='services' element={<Services/>}/>
              <Route path='contact' element={<Contact/>}/>
          </Route>
        </Routes>
    </BrowserRouter>


      
      
    );

}
export default App