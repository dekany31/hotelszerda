import React, {useState} from 'react'

function Subscription() {

  const [email, setEmail] = useState("")
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const subscript = (hotelName, userEmail) => {

    setLoading(true)
    fetch('api/hotels/subscribe',
    { method: 'POST',
      body: JSON.stringify({
          hotel: hotelName,
          email: userEmail
    })
  })
    .then( (resp) => (resp.json()) )
    .then ( (adat) => (setData(adat)) )
    .catch( (err) => {
                      console.log("FetchError=", err);
                      setData(null);
                    } 
          )
    .finally( () => (setLoading(false)) )
     console.log("adat=", data);                 

  return (
    <div>
      <h3>Request more info about</h3>
      <form>
          <input type="email"  onChange={(ev) => setEmail(ev.target.value)}/>
          <button  disabled={!(email.includes("@") && email.includes("."))} 
                    onClick={ () => subscript(props.name, email) }>Send</button>
      </form> 
    </div>
  )
}

export default Subscription
