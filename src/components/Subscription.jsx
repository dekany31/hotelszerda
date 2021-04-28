import React, { useState } from 'react'

function Subscription(props) {

  const [email, setEmail] = useState("")
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const subscript = (hotelName, userEmail) => {
    console.log(userEmail);
    console.log(hotelName);
    setLoading(true)
    fetch('api/hotels/subscribe',
      {
        method: 'POST',
        body: JSON.stringify({
          hotel: hotelName,
          email: userEmail
        })
      })
      .then((resp) => (resp.json()))
      .then((adat) => (setData(adat)))
      .catch((err) => {
        console.log("FetchError=", err);
        setData(null);
      }
      )
      .finally(() => (setLoading(false)))
  }
  console.log("subsc=", data);

  return (
    <div>
      <h3>Request more info about</h3>
      <form>
        <input type="email" onChange={(ev) => setEmail(ev.target.value)} />
        <button disabled={!(email.includes("@") && email.includes("."))}
          onClick={() => subscript(props.hotelName, email)}>Send</button>
      </form>
    </div>
  )
}

export default Subscription
