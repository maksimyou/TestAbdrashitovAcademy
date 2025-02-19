import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { CharacterState,Character,Results } from './types'
import axios from 'axios'

const initialState: CharacterState = {
    loading: false,
    error:'',
    character:{
        info:{
            count: 0,
            pages: 0,
            next: '',
            prev: ''
        },
        results: [],
    },
    errorMessageReg:'',
    favourites:[],
    detailsCharacter:{
        id: 0,
        name: '',
        status: '',
        species: '',
        type: '',
        gender: '',
        origin: {
            name: '',
            url: ''
        },
        image: '',
        episode:[],
        url: '',
    }
}



export const getCharacter = createAsyncThunk<Character,undefined,{rejectValue:string}>(
    'character/getCharacter',
    async (_,{rejectWithValue}) => {
        try {
            const response = await axios.get('https://rickandmortyapi.com/api/character');
            const data:Character = response.data;
            return data 
        } catch (error) {
            console.log(error)
            return  rejectWithValue('') 
        }
    },
)


export const getDetailCharacter = createAsyncThunk<Results,number,{rejectValue:string}>(
    'character/getDetailCharacter',
    async (number,{rejectWithValue}) => {
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${number}`);
            const data:Results = response.data;
            return data 
        } catch (error) {
            console.log(error)
            return  rejectWithValue('' ) 
        }
    },
)


export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        // Обработка получения токена из параметров URL
        addFavourite: (state,action) => {
                state.favourites.push(action.payload) 
        },
        removeFavourite: (state,action) => {
            state.favourites = state.favourites.filter(e=>e !== action.payload) 
        },
        removeCharacter: (state,action) => {
            state.character.results = state.character.results.filter(e=>e.id !== action.payload) 
        },
        addCharacter: (state,action) => {
                state.character.results.push(action.payload) 
        },
        getDetailCharacterState: (state,action) => {
            state.detailsCharacter = state.character.results.filter(e=>e.id === action.payload)[0]
        },

    },
    extraReducers: (builder) => {
        builder
        .addCase(getCharacter.rejected, (state, action) => {
            state.error = action.payload as string
        })
        .addCase(getCharacter.pending,(state)=>{
            state.loading = false
        })
        .addCase(getCharacter.fulfilled ,(state,action)=>{
            state.character = action.payload as Character
        })
        .addCase(getDetailCharacter.rejected, (state, action) => {
            state.error = action.payload as string
        })
        .addCase(getDetailCharacter.pending,(state)=>{
            state.loading = false
        })
        .addCase(getDetailCharacter.fulfilled ,(state,action)=>{
            state.detailsCharacter = action.payload as Results
        })
        
    },
})


// Action creators are generated for each case reducer function
export const { addFavourite,removeFavourite,removeCharacter,addCharacter,getDetailCharacterState} = characterSlice.actions

export default characterSlice.reducer