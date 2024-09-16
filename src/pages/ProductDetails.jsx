import { useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../utilities/useFetch'
import Loader from './Loader'
export default function ProductDetails() {
  const [product, setProduct] = useState({})
  const { id } = useParams()
  console.log(id)

 const {get,loading} = useFetch(
  "https://router-12f10-default-rtdb.europe-west1.firebasedatabase.app"
 )

 useEffect(() => {
  get(`/productdetails/id${id}.json`).then((data) => setProduct(data))
 },[])
 if (loading) return <Loader/>

  return (
    <div>
      <Link to='/'>Back home</Link>
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <img src={product.image} width='100' />
        </div>
      )}
    </div>
  )
}
