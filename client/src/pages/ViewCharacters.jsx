import React from 'react'
import '../App.css'
import { getAllCharacters } from '../services/CharactersAPI';
import { getImage } from '../components/characterinfo';
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
                            <div className="mb-10 shadow-md rounded-md flex-1 max-w-xs min-w-[100px]" key={character.id}>
                                {/* name, class, weapon, ability */}
                                <div className="bg-gray-900 text-white px-5 py-5">
                                    <img className="w-28 h-36 object-cover mb-5" src={getImage("classes", character.class)} alt="" />
                                    <p className="text-2xl">{character.name} </p>
                                    <p>class: {character.class}</p>
                                </div>
                                <div className="flex mt-5 gap-4 px-8 mb-5">
                                    <img className="w-16" src={getImage("weapons", character.weapon)} alt="" />
                                    <p className="flex-1">weapon: <br />{character.weapon}</p>
                                </div>
                                <div className="flex gap-4 px-8 mb-5">
                                    <img className="w-16" src={getImage("abilities", character.ability)} alt="" />
                                    <p className="flex-1">ability: <br />{character.ability}</p>
                                </div>
                            </div>
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