import { useState } from 'react'


export default function Product(props) {
  const [count, setCount] = useState(0)

  const { details } = props

  function handleIncrementClick() {
    setCount((c) => c + 1)
  }
  function handleDecrementClick() {
    if (count > 0) {
      setCount((c) => c - 1)
    }
  }

  return (
    <div className='product'>
      <img src={details.image} width='50' alt={details.name} />
      <div className='product-info'>
        <h2>{details.name}</h2>
        <p>{details.description}</p>
      </div>
    </div>
  )
}
