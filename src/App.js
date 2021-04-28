import './App.css'
import React, {useEffect, useState} from "react"
import LoadingMask from "./components/LoadingMask"

const App = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {

   setLoading(true)
    fetch('api/hotels')
    .then( (resp) => (resp.json()) )
    .then ( (adat) => (setData(adat)) )
    .catch( (err) => {
                      console.log("FetchError=", err);
                      setData(null);
                    } 
          )
    .finally( () => (setLoading(false)) )
  }, [])

console.log("data=", data);
  return (
    <div className="App">
      <h1>Hotels</h1>
      {
        loading ? <LoadingMask />
                : data === null ? "error fetch Api"
                                 : data.map((hotel, index) => <Hotel key={index.toString() + "-hotel" } hotel={hotel}/>)  
      }

    </div>
  )
}

export default App
