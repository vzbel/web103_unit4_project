import React from 'react'
import '../App.css'
import { updateCharacter } from '../services/CharactersAPI';
import {classes, weapons, abilities} from "../components/characterinfo.js";
import { useParams } from 'react-router-dom';
import { getCharacter } from '../services/CharactersAPI';
import CharacterCard from '../components/CharacterCard.jsx';
import { useNavigate } from 'react-router-dom';

const EditCharacter = () => {
    const [name, setName] = React.useState("");
    const [characterClass, setCharacterClass] = React.useState("");
    const [weapon, setWeapon] = React.useState("");
    const [ability, setAbility] = React.useState("");

    const { id } = useParams();
    const [characterInfo, setCharacterInfo] = React.useState({});

    const navigate = useNavigate();

    React.useEffect(()=>{
        async function getCharacterData(){
            const data = await getCharacter(id);
            setCharacterInfo(data);
            setName(data.name);
            setCharacterClass(data.class);
            setWeapon(data.weapon);
            setAbility(data.ability);
        }
        getCharacterData();
    }, [id]);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const formData = {name, characterClass, weapon, ability};
        // console.log(formData);
        const character = {
            name: name,
            class: characterClass,
            weapon: weapon,
            ability: ability
        };

        // update character in DB
        await updateCharacter(characterInfo.id, character);
        navigate("/");
    } 
    return (
        characterInfo.id ?

        <div className="mt-10">
            {characterInfo.id 
                ?
                <div className="max-w-lg mx-auto">
                    <p>Your Character</p>
                    <CharacterCard {...characterInfo}/>
                </div>
                : <>Loading Character...</>
            }
            <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
                <div className="flex flex-wrap">
                    {/* Select character class (e.g. wizard or healer) */}
                    <div className="flex-1 min-w-[200px] shadow-md p-2">
                        <label htmlFor="character-class">Character Class</label>
                        <br />
                        {
                            classes.map((charClass) =>{
                                return (
                                    <label key={charClass.name} htmlFor="" className={`${charClass.name === characterClass ? "bg-blue-400 text-white" : ""} mb-10 shadow-sm focus-within:bg-blue-400`}>
                                        <div className="flex items-center gap-2" >
                                            {/* Selection by radio, updates state as well */}
                                            <input  type="radio" name="characterClass" checked={charClass.name === characterClass} value={charClass.name} onChange={(e) => setCharacterClass(e.target.value)}/>

                                            {/* Image and name of class */}
                                            <img src={charClass.img} alt="character class image" className="block w-24 h-24 object-coverflex-shrink-0" />
                                            <p>{charClass.name}</p>
                                        </div>
                                    </label>
                                );
                            })
                        }
                    </div>

                    {/* Select character weapon */}
                    <div className="flex-1 min-w-[200px] shadow-md p-5">
                        <label htmlFor="character-class">Weapon</label>
                        <br />
                        {
                            weapons.map((weaponItem) =>{
                                return (
                                    <label key={weaponItem.name} htmlFor="" className={`${weaponItem.name === weapon ? "bg-blue-400 text-white" : ""} mb-10 shadow-sm focus-within:bg-blue-400`} >
                                        <div className="flex items-center gap-2">
                                            {/* Selection by radio, updates state as well */}
                                            <input type="radio" name="weapon" value={weaponItem.name} checked={weaponItem.name === weapon} onChange={(e) => setWeapon(e.target.value)}/>

                                            {/* Image and name of class */}
                                            <img src={weaponItem.img} alt="character weapon image" className="block w-24 h-24 object-coverflex-shrink-0" />
                                            <p>{weaponItem.name}</p>
                                        </div>
                                    </label>
                                );
                            })
                        }
                    </div>

                    {/* Select character ability */}
                    <div className="flex-1 min-w-[200px] shadow-md p-5">
                        <label htmlFor="character-class">Ability</label>
                        <br />
                        {
                            abilities.map((abilityItem) =>{
                                return (
                                    <label key={abilityItem.name} htmlFor="" className={`${abilityItem.name === ability ? "bg-blue-400 text-white" : ""} mb-10 shadow-sm focus-within:bg-blue-400`}>
                                        <div className="flex items-center gap-2">
                                            {/* Selection by radio, updates state as well */}
                                            <input type="radio" name="ability" value={abilityItem.name} checked={abilityItem.name === ability} onChange={(e) => setAbility(e.target.value)}/>

                                            {/* Image and name of class */}
                                            <img src={abilityItem.img} alt="character ability image" className="block w-24 h-24 object-coverflex-shrink-0" />
                                            <p>{abilityItem.name}</p>
                                        </div>
                                    </label>
                                );
                            })
                        }
                    </div>
                </div>

                {/* Provide character name and submit */}
                <div className="max-w-fit mx-auto flex justify-center gap-2 mt-6">
                    <input name="name" className="inline-block shadow-md p-2" type="text" placeholder="Sir John the Magical..." value={name} onChange={(e) => setName(e.target.value)}/>
                    <button type="submit" className="p-2 bg-blue-500 text-white rounded-sm">Update Character</button>
                </div>
            </form>
        </div>
        :
        <>Loading character...</>
    )
};

export default EditCharacter;