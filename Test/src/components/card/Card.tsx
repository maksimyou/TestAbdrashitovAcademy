import {FC} from 'react'
import './Card.scss'
import { MdFavorite } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { Button } from '@mui/material'
import {useAppDispatch,useAppSelector} from '../../hooks/useTypeSelectDispstch'
import {addFavourite,removeFavourite,removeCharacter} from '../../redux/character/actions'
import { Link } from 'react-router-dom';
interface CardProps  {
    idCard:number,
    image:string,
    name:string
}
const Card:FC<CardProps> = ({idCard,image,name}) => {
    const dispatch = useAppDispatch()
    const favourites = useAppSelector((state)=>state.character.favourites);
    

const handleFavorite = ()=>{
    favourites.includes(idCard)
    ? dispatch(removeFavourite(idCard))
    : dispatch(addFavourite(idCard))
}

  return (
    <div className='card-container'>
        <Link  to={ `/products/${idCard}`}>
            <div className="card-contnet">
                <img src={image} alt="" />
                <div className='card-name'>{name}</div>
                <div className="card-btns">
                    <MdFavorite color={favourites.includes(idCard)?'red':'black'} onClick={(e)=>{handleFavorite(); e.preventDefault() }} size={30}/>
                    <Button variant="contained">Подробнее</Button>
                    <MdDeleteForever onClick={(e)=>{dispatch(removeCharacter(idCard)); e.preventDefault() }} size={30}/>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Card