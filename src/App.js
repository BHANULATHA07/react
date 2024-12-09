import React from 'react'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Dashboard from './Pages/Dashboard'
import ViewallDtoys from './Viewall/ViewallDtoys'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ViewallDshirts from './Viewall/ViewallDshirts'
import ViewallDbelts from './Viewall/ViewallDbelts'
import SDbelts from './Singleitems/SDbelts'
import SDshirts from './Singleitems/SDshirts'
import SDtoys from './Singleitems/SDtoys'
import SDbeltssli from './Singleitems/SDbeltssli'
import SDshirtssli from './Singleitems/SDshirtssli'
import SDtoyssli from './Singleitems/SDtoyssli'



function App() {
  return (
    <div>
      <div className='container-fluid'>
      <Router>
        <Routes>
          <Route path='/react' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/ViewallDtoys' element={<ViewallDtoys />} />
          <Route path='/ViewallDshirts' element={<ViewallDshirts />} />
          <Route path='/ViewallDbelts' element={<ViewallDbelts />} />
          <Route path='/ViewallDbelts/:id' element={<SDbelts/>} />
          <Route path='/ViewallDshirts/:id' element={<SDshirts />} />
          <Route path='/ViewallDtoys/:id' element={<SDtoys />} />
          <Route path='/ViewDbelts/:id' element={<SDbeltssli />} />
          <Route path='/ViewDshirts/:id' element={<SDshirtssli />} />
          <Route path='/ViewDtoys' element={<SDtoyssli />} />
        </Routes>
      </Router>
      </div>
     
    </div>
);

}

export default App