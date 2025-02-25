import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './About.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'
import Services from './Services.jsx'
import NavBar from './NavBar.jsx'

const App = () => {

return(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar/>}>
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