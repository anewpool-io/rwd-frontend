import React, { useState } from 'react'
import Token from './Token'
import StakePool  from './StakePool'

export default function Rewards() {
  const [tokens, setTokens] = useState([])
  const [stakePool, setStakePool] = useState(null)
  const cancelButton = () => {
    console.log('Cancel Clicked')
  }

  const checkRewards = () => {
    console.log('Check rewards clicked')
    setTokens(arr => [...arr, {name: 'anetaBTC', amount: 400}])
    setTokens(arr => [...arr, {name: 'anetaBTC', amount: 600}])
    setStakePool({amount: 1200, pool:'Neta2'})
  }
  return (
    <div className='home'>
      <div class="border border-secondary">
        <p>Enter your wallet/stake address or $handle to view your rewards</p>
        <input></input>
        <div>
          <button type="button" class="btn btn-secondary" onClick={cancelButton}>Cancel</button>
          <button type="button" class="btn btn-primary" onClick={checkRewards}>Check my rewards</button>
        </div>
      </div>
      <div>
        {stakePool && <StakePool stake={stakePool} /> }
      </div>
      <div>
        {tokens.length > 0 && tokens.map(token => <Token key={token.amount}token = {token} />)}
      </div>
    </div>
  )
}
