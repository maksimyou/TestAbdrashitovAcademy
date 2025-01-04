export interface Character {
    info:Info,
    results: Results[]
}


interface Info {
    count: number,
    pages: number,
    next: string,
    prev: null|string
}


export interface Results {
        id: number,
        name: string,
        status: string,
        species: string,
        type: string,
        gender: string,
        origin: Origin,
        image: string,
        episode: string[],
        url: string,
}

interface Origin {
        name: string,
        url: string
}

export interface CharacterState {
    loading: boolean,
    error:string,
    character:Character,
    errorMessageReg:string,
    favourites:number[],
    detailsCharacter:Results
}

