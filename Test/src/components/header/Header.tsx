import React, { FC, useEffect, useState } from 'react'
import './Header.scss'
import { Switch,Button } from '@mui/material'
import  TextField  from '@mui/material/TextField'
import { FaFilter } from "react-icons/fa";
import {useAppDispatch,useAppSelector} from '../../hooks/useTypeSelectDispstch'
//import {getCharacter} from '../../redux/character/actions'
import { Link } from 'react-router-dom';

interface HeaderProps {
  setSwitch:any
}

const Header:FC<HeaderProps> = ({setSwitch}) => {
const [all,setAll] = useState(false)
const [favourite,setFavourite] = useState(false)

  //const dispatch = useAppDispatch()
  //const characters = useAppSelector((state)=>state.character.character);
  //const favourites = useAppSelector((state)=>state.character.favourites);

  const handleSwitchChecked = ()=>{
    //setFavourite(true); 
    setSwitch(true)
  }

  const handleSwitchChecked2 = ()=>{
    //setAll(true);
    setSwitch(false)
  }

  useEffect(()=>{
  
    //if(all){dispatch(getCharacter());setAll(false)}
    //if(favourite){dispatch(getFavouritesCharacter(favourites));setFavourite(false)}
  },[all,favourite])


  return (
    <header className='header-wrap'>
      <div  className="header-filter"
      >
        <div className="qwer">Все карточки</div>
        <Switch onClick={e=>{e.target.checked? handleSwitchChecked(): handleSwitchChecked2()}}  />
        <div className="">Избранные</div>
      </div>
      <div className="header-search">
        <TextField fullWidth  id="outlined-search" label="Search field" type="search" />
        <FaFilter  cursor={"pointer"} size={30} />
      </div>
      <div className="header-create-product">
        <Link to={'/create-product'}><Button variant="contained">Создать</Button></Link>
      </div>
    </header>
  )
}

export default Header