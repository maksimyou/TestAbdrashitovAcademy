import  { FC } from 'react'
import './Header.scss'
import { Switch,Button } from '@mui/material'
import  TextField  from '@mui/material/TextField'
import { FaFilter } from "react-icons/fa";
import { Link } from 'react-router-dom';

interface HeaderProps {
  setSwitch:any
}

const Header:FC<HeaderProps> = ({setSwitch}) => {

  const handleSwitchChecked = ()=>{

    setSwitch(true)
  }

  const handleSwitchChecked2 = ()=>{
  
    setSwitch(false)
  }


  return (
    <header className='header-wrap'>
      <div  className="header-filter"
      >
        <div className="qwer">Все карточки</div>
        <Switch onClick={e=>{(e.target as HTMLInputElement).checked? handleSwitchChecked(): handleSwitchChecked2()}}  />
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