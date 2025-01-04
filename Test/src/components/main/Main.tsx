import { FC, useEffect } from 'react'
import './Main.scss'
import {useAppDispatch,useAppSelector} from '../../hooks/useTypeSelectDispstch'
import {getCharacter} from '../../redux/character/actions'

import Card from '../card/Card'

interface MainProps {
  switchh:boolean
}

const Main:FC<MainProps> = ({switchh}) => {
  const dispatch = useAppDispatch()
  const characters = useAppSelector((state)=>state.character.character);
  const favourites= useAppSelector((state)=>state.character.favourites);

  useEffect(()=>{
    if(characters.results.length === 0){
      dispatch(getCharacter())
    } 
  },[])
  return (
    <div className='main-container'>
      <div className="main-content">
        {switchh&&favourites.length === 0
        ? <div className='main-not-favorite'>У вас нет избранных</div>
        :switchh&&favourites.length !== 0
        ?characters.results.filter(e=> favourites.includes(e.id)).map((e)=>{
          return <Card key={e.id} idCard={e.id} image={e.image} name={e.name}/>})
        :characters.results.map((e)=>{
            return <Card key={e.id} idCard={e.id} image={e.image} name={e.name}/>})
        }
      </div>
    </div>
  )
}

export default Main