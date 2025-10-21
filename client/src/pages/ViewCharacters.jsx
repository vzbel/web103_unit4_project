import React from 'react'
import '../App.css'
import { getAllCharacters } from '../services/CharactersAPI';
import { getImage } from '../components/characterinfo';
import CharacterCard from '../components/CharacterCard.jsx';

const ViewCharacters = () => {
    const [characters, setCharacters] = React.useState([]);

    React.useEffect(() =>{
        async function getCharacters(){
            const data = await getAllCharacters();
            setCharacters(data);
        }
        getCharacters();
    }, []);
    return (
        <div className="mt-10">
            {
                characters ?

                    <div className="flex flex-wrap gap-5 justify-center">
                    {
                        (
                            characters.map((character) => (
                                // spread the character's information into the component props obj
                                <CharacterCard key={character.id} {...character}/>
                        )))
                    }
                    </div>
                : 
                    <>No characters to show...</>
            }

        </div>
    )
};

export default ViewCharacters;