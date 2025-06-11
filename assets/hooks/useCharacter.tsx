import {useEffect, useState} from "react";
import axios from "axios";
import {nullable} from "@/assets/types";
import {useRouter} from "next/router";

export const useCharacter = (): nullable => {
    const [character, setCharacter] = useState<nullable>(null)

    const router = useRouter()

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character/${router.query.id}`).then(res => {
            setCharacter(res.data)
        })
    }, []);
    return character
}