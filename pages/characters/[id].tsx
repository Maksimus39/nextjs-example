import styles from "@/styles/Home.module.css";
import {CharactersCard} from "@/components/characterCard/CharactersCard";
import {HeaderMeta} from "@/components/headerMeta/HeaderMeta";
import {getLayout} from "@/components/layout/Layout";
import {useCharacter} from "@/assets/hooks/useCharacter";

function Character() {

    const character = useCharacter()

    return (
        <>
            <HeaderMeta title={"Create Next App"}/>
            <main className={styles.main}>
                {character && <CharactersCard character={character}/>}
            </main>
        </>
    );
}

Character.getLayout = getLayout
export default Character



