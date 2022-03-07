import React from 'react'

export default function StakePool(stake) {
    const stake1 = {
        amount: 40,
        pool: 'Neta'
    }
  return (
    <>
      <div>
        <p>Currently staking {stake1.amount} ADA with {stake1.pool} stake pool</p>
      </div>
    </>
  )
}
