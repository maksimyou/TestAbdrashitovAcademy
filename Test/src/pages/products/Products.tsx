import {useState} from 'react'
import './Products.scss'
import Header from '../../components/header/Header'
import Main from '../../components/main/Main'

const Products = () => {
    const [switchh,setSwitch] = useState(false)
  return (
    <div className='products-container'>
        <div className="products-content">
            <Header setSwitch={setSwitch}/>
            <Main switchh={switchh}/>
        </div>
    </div>
  )
}

export default Products