import React, {useState} from 'react'
import Subscription from "./Subscription"


function Hotel({hotel, key}) {

  const [show, setShow] = useState(false)

  return (
    <div>
      <h3>{hotel.name}</h3>
      <button onClick={(ev)=>setShow(!show)}>
        {show ? "Show less"
              : "Show more"}
      </button>
      {
        show ? <Subscription city={hotel.city} stars={hotel.stars} />
            : ""
      }
    </div>
  )
}

export default Hotel
