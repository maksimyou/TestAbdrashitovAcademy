import React,{useEffect} from 'react'
import './ProductDetail.scss'
import { Link, useParams } from 'react-router-dom'
import { Button } from '@mui/material'

import {useAppDispatch,useAppSelector} from '../../hooks/useTypeSelectDispstch'
import {getDetailCharacter,getDetailCharacterState} from '../../redux/character/actions'


const ProductDetail = () => {
    let params = useParams()
    const dispatch = useAppDispatch()
    const detailsCharacter = useAppSelector((state)=>state.character.detailsCharacter);
    useEffect(()=>{
        if((Number(params.id)) >= 890){
            dispatch(getDetailCharacterState(Number(params.id)))
        }
        dispatch(getDetailCharacter(Number(params.id)))

    },[])
    
    
  return (
    <div className='product-detail_container'>
        <h1 className='product-detail_title'>Подробная информация о персонаже</h1>
        <div className="product-detail_content">
            <img src={detailsCharacter.image} alt="" />
            <div className='product-detail_info'>
                <div className=""><span>Имя:</span>{detailsCharacter.name}</div>
                <div className=""><span>Пол:</span>{detailsCharacter.gender}</div>
                <div className=""><span>Разновидность:</span>{detailsCharacter.species}</div>
                <div className=""><span>Статус:</span>{detailsCharacter.status}</div>
                <div className=""><span>Эпизоды:</span>{detailsCharacter.episode.map(e=>e.split('/').pop()).toString()}</div>
            </div>
        </div>
        <div className="product-detail_btns">
            <Link to={'/products'}><Button variant="contained">Все карточки</Button></Link>
            <Link to={'/'}><Button variant="contained">На главную</Button></Link>
        </div>
    </div>
  )
}

export default ProductDetail