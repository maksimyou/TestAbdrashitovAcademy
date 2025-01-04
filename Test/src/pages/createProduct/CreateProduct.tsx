import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import './CreateProduct.scss'
import {useState} from 'react'
import { Link } from 'react-router-dom';
import {useAppDispatch} from '../../hooks/useTypeSelectDispstch'
    import {addCharacter} from '../../redux/character/actions'

const CreateProduct = () => {
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [species, setSpecies] = useState('')
    const [status, setStatus] = useState('')
    const [avatar, setAvatar] = useState('')
    const [errorr, setError] = useState(false)
    const [messageCreated, setMessageCreated] = useState(false)

    const dispatch = useAppDispatch()


const validationForm = ()=>{
    if(name === ''){
        setError(true);
        return
    }else if(gender === ''){
        setError(true);
        return
    }else if(species === ''){
        setError(true);
        return
    }else if(status === ''){
        setError(true);
        return
    }else if(avatar === ''){
        setError(true);
        return
    }else{
        const character = {
            id: randomInteger(),
            name: name,
            status: status,
            species: species,
            type: '',
            gender: gender,
            origin: {},
            image: avatar,
            episode: [
                "https://rickandmortyapi.com/api/episode/42",
                "https://rickandmortyapi.com/api/episode/43",
                "https://rickandmortyapi.com/api/episode/44",
                "https://rickandmortyapi.com/api/episode/45",
                "https://rickandmortyapi.com/api/episode/46",
                "https://rickandmortyapi.com/api/episode/47",
                "https://rickandmortyapi.com/api/episode/48",
                "https://rickandmortyapi.com/api/episode/49",
                "https://rickandmortyapi.com/api/episode/50",
                "https://rickandmortyapi.com/api/episode/51"
            ],
            url: ''
        }
        dispatch(addCharacter(character))
        setName('')
        setGender('')
        setSpecies('')
        setStatus('')
        setAvatar('')
        setError(false)
        setMessageCreated(true)
        setTimeout(()=>{
            setMessageCreated(false)
        },2000)
    }
}

const randomInteger =()=> {
    // случайное число от min до (max+1)
    let rand = 890 + Math.random() * (1000 + 1 - 890);
    return Math.floor(rand);
}


  return (
    <div className='create-product-container'>
        <h1>Создание нового персонажа</h1>
        <div className="create-product-content">
            <form action="">
                <TextField
                    error={errorr&&name===''}
                    className='create-product-input'
                    required
                    value={name}
                    id="outlined-required"
                    label="Имя"
                    onChange={e=>setName(e.target.value)}
                />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Пол</InputLabel>
                    <Select
                        error={errorr&&gender===''}
                        className='create-product-input'
                        required
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={gender}
                        label="Пол:"
                        onChange={e=>setGender(e.target.value)}
                    >
                        <MenuItem value={'Male'}>Мужской</MenuItem>
                        <MenuItem value={'Female'}>Женский</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Разновидность</InputLabel>
                    <Select
                        error={errorr&&species===''}
                        className='create-product-input'
                        required
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={species}
                        label="Разновидность:"
                        onChange={e=>setSpecies(e.target.value)}
                    > 
                        <MenuItem value={'Alien'}>Пришелец</MenuItem>
                        <MenuItem value={'Human'}>Человек</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Статус</InputLabel>
                    <Select
                        error={errorr&&status===''}
                        className='create-product-input'
                        required
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Статус:"
                        onChange={e=>setStatus(e.target.value)}
                    > 
                        <MenuItem value={'Alive'}>Жив</MenuItem>
                        <MenuItem value={'Dead'}>Мертв</MenuItem>
                        <MenuItem value={'unknown'}>Неизвестно</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    error={errorr&&avatar===''}
                    className='create-product-input2'
                    id="outlined-required"
                    label="Аватар:"
                    value={avatar}
                    onChange={e=>setAvatar(e.target.value)}
                />
                <span className='create-product-text'>Введите ссылку на Аватар персонажа.Например:(https://rickandmortyapi.com/api/character/avatar/3.jpeg)</span>
                
                <Button onClick={validationForm} variant="contained">Создать</Button>
                {messageCreated&&<span style={{marginTop:'20px',color:'green'}} className='create-product-text'>Персонаж создан</span>}
            </form>
        </div>
        <div className="product-detail_btns">
            <Link to={'/products'}><Button variant="contained">Все карточки</Button></Link>
            <Link to={'/'}><Button variant="contained">На главную</Button></Link>
        </div>
    </div>
  )
}

export default CreateProduct
