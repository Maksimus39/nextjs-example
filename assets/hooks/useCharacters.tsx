import {useEffect, useState} from "react";
import axios from "axios";
import {nullable} from "@/assets/types";

export const useCharacters = (): nullable => {
    const [characters, setCharacters] = useState<nullable>(null)

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character").then(res => {
            console.log(res.data.results)
            setCharacters(res.data.results)
        })
    }, [characters]);
    return characters
}

// type
type Location = {
    name: string;
    url: string;
};
export type Character = {
    created: string;
    episode: string[];
    gender: string;
    id: number;
    image: string;
    location: Location;
    name: string;
    origin: Location;
    species: string;
    status: string;
    type: string;
    url: string;
};