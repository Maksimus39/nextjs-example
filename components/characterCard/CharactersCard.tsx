import Image from "next/image";
import styles from "./CharactersCard.module.css"
import {CharacterType} from "assets/hooks/useCharacters";


type Props = {
    character: CharacterType
}
export const CharactersCard = (props: Props) => {
    const {character} = props


    return <div key={character.id} className={styles.card}>
        <div>{character.name}</div>
        <Image src={character.image}
               alt={character.location.name}
               width={300}
               height={300}/>
    </div>
}