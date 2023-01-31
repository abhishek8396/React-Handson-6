import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Component/Home'
import Contact from './Component/Contact'
import Student from './Component/Student'
import EditStudent from './Component/EditStudent'
import AddStudent from './Component/AddStudent'
import DataContext from './Component/DataContext'

import './App.css'

const App = () => {
  const [data, setdata] = useState([{
    name : 'Abhishek',
    age : '23',
    course : 'btech',
    batch : '2018'
  },
  {
    name : 'Aman',
    age : '25',
    course : 'btech',
    batch : '2018'
  },
  {
    name : 'Naman',
    age :'22',
    course : 'b.com',
    batch : '2022'
  }])
  const navigate = useNavigate();
  const home = () => {
navigate('/')
  }
  const student = () => {
    navigate('/student')
      }
      const contact = () => {
        navigate('/contact')
          }
  return (
    <div>
<div className='navbar'>
  <span onClick={home}>Home</span>
  <span onClick={student}>Student</span>
  <span onClick={contact}>Contact Us</span>

</div>
<div className='route-div'>
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/student' element={
  <DataContext.Provider value={{entries : data, updatefunc : setdata}}>
<Student />
  </DataContext.Provider>
  }/>
  <Route path='/addstudent' element={
  <DataContext.Provider value={{entries : data, updatefunc : setdata}}>
  <AddStudent />
  </DataContext.Provider>
  }/>
  <Route path='/contact' element={<Contact />}/>
 
  <Route path='/editstudent' element={
   <DataContext.Provider value={{entries : data, updatefunc : setdata}}>
  <EditStudent />
  </DataContext.Provider>
}/>
  


</Routes>
</div>



    </div>
  )
}

export default App
