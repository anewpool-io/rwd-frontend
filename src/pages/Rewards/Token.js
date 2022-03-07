import React, { useState } from 'react'
import * as GiIcons from 'react-icons/gi';


export default function Token({token}) {
  const [claimedToken, setClaimedToken] = useState([])

  const claimToken = () => {
  }


  return (
    <>
        <div class="card">
          <div class="card-header">
          <p>{token.amount} Available</p>
          </div>
          <div class="card-header">
            <GiIcons.GiAbstract001 onClick={claimToken} />
            <h3>{token.name}</h3>
            <div class="d-grid gap-2">          
              <button type="button" class="btn btn-primary" onClick={claimToken}>Claim Token</button>
            </div> 
          </div>
        </div>
       
    </>
  )
}
