import Image from "next/image";
import {Character} from "@/assets/hooks/useCharacters";


type Props = {
    character: Character
}
export const CharactersCard = (props: Props) => {
    const {character} = props


    return <div key={character.id}>
        <div>{character.name}</div>
        <Image src={character.image}
               alt={character.location.name}
               width={300}
               height={300}/>
    </div>
}