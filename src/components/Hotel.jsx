import React, { useState } from 'react'
import Subscription from "./Subscription"


function Hotel({ hotel, key }) {

  const [show, setShow] = useState(false)
  const [showSubs, setshowSubs] = useState(false)

  return (
    <div>
      <h3>{hotel.name}</h3>
      <button onClick={(ev) => setShow(!show)}>
        {show ? "Show less"
          : "Show more"}
      </button>
      {
        show && <>
          <p>{hotel.city}({hotel.stars})</p>
          <button onClick={(ev) => setshowSubs(!showSubs)}>Request more info</button>
          {
            showSubs && <Subscription hotelName={hotel.name} showSubs={setShowSubs} />
          }
        </>

      }
    </div>
  )
}

export default Hotel
