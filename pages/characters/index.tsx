import styles from "@/styles/Home.module.css";
import {useCharacters} from "@/assets/hooks/useCharacters";
import {CharactersCard} from "@/components/characterCard/CharactersCard";
import {HeaderMeta} from "@/components/headerMeta/HeaderMeta";
import {getLayout} from "@/components/layout/Layout";
import Link from "next/link";


function Characters() {

    const characters = useCharacters()

    return (
        <>
            <HeaderMeta title={"Create Next App"}/>
                <main className={styles.main}>
                    {characters && characters.map((char) => (
                        <Link key={char.id} href={`/characters/${char.id}`}>
                            <CharactersCard  character={char}/>
                        </Link>

                    ))}
                </main>
        </>
    );
}

Characters.getLayout = getLayout
export default Characters



