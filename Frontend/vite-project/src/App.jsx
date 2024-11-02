import { useContext, useEffect } from "react"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import Register from "./Components/Signuppage"
import axios from 'axios'
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom"
import { Context } from "./main"
import AddQuestion from "./Components/AddQuest"
function App() {
 
  const {setisauthenticated,isauthenticated,loading, setloading,setuser}=useContext(Context)
    useEffect(()=>{

      const something = async()=>{
        setloading(true)
    try {
      const {data}= await axios.get('http://localhost:4000/profile',{ withCredentials: true })
      console.log(data);
      setuser(data.user)
      setisauthenticated(true)
      setloading(false)
     

    } catch (error) {
      console.log(error);
      setuser(null)
      setisauthenticated(false)
      setloading(false)
    }
  }

  something()
  },[])
  


  return (
     <Router>
   <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/add" element={<AddQuestion/>}/>

    
    </Routes>
  </Router>
  )
}
    
  


export default App
