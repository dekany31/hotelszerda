import React, { useState } from 'react'

function Subscription(props) {

  const [email, setEmail] = useState("")
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const subscript = (hotelName, userEmail) => {
    console.log(userEmail);
    console.log(hotelName);
    // setLoading(true)
    fetch('api/hotels/subscribe',
      {
        method: 'POST',
        body: JSON.stringify({
          hotel: hotelName,
          email: userEmail
        })
      })
      .then((resp) => (resp.json()))
      .then((adat) => { setData(adat); setMessage(adat.success ? 'subscribed' : 'already subscribed') })
      .catch((err) => {
        console.log("FetchError=", err);
        setData(null);
      }
      )
      .finally(() => (setLoading(false)))
  }
  console.log("subsc=", data);
  if (message !== "")
    return <h3>{message}</h3>
  else
    return (
      <div>
        <h3>Request more info about</h3>
        <>
          <input type="email" onChange={(ev) => setEmail(ev.target.value)} />
          <button disabled={!(email.includes("@") && email.includes("."))}
            onClick={() => subscript(props.hotelName, email)}>Send</button>
        </>
      </div>
    )
}

export default Subscription
