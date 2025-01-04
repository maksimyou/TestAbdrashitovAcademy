
import './App.scss'
import { Button } from '@mui/material'
import rickAndMorty from './assets/rick-and-morty-siemki.jpg'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
    <div className="image-btn-title-main">
      <h1 className="title">Тестовое задание</h1>
      <img src={rickAndMorty} alt="" />
      <Link to={'/products'}>
        <Button variant="contained">Показать карточки</Button>
      </Link>
    </div>
     
    </>
  )
}

export default App
