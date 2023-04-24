import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from "react"



function App() {
  const [backendData,setBackEndData] = useState([])
  
  
  useEffect(() =>{
    fetch("/api")
    .then(response =>{
      return response.json()
    })
    .then(data =>{
      setBackEndData(data)
    })
    
  },[])

  console.log(backendData)
  return (
 <div>
  {(typeof backendData.users === "undefined") ? (
    <p>Loading...</p>
  ): (
    backendData.users.map((user,i,l) =>(
      <p key={i} >{user}</p>
    ))
    )}
    </div>
    )
}
export default App;
 