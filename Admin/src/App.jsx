import React from 'react'
import Navbar from './Components/Navbar/Navbar'
// import Sidebar from './Components/Sidebar/Sidebar'
import Admin from './Pages/Admin/Admin'

function App() {
  return (
    <div>
      <Navbar/> 
      {/* <Sidebar/> */}
      <Admin/>
    </div>
  )
}

export default App