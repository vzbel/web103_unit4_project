import React from 'react'
import '../App.css'

import {createCharacter} from "../services/CharactersAPI.jsx";
import {classes, weapons, abilities} from "../components/characterinfo.js";


const CreateCharacter = () => {
    const [name, setName] = React.useState("");
    const [characterClass, setCharacterClass] = React.useState("");
    const [weapon, setWeapon] = React.useState("");
    const [ability, setAbility] = React.useState("");

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

        // add character to DB
        await createCharacter(character);
    }

    return (
        <div className="mt-10">
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
                                        <div className="flex items-center gap-2">
                                            {/* Selection by radio, updates state as well */}
                                            <input type="radio" name="characterClass" value={charClass.name} onChange={(e) => setCharacterClass(e.target.value)}/>

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
                                    <label key={weaponItem.name} htmlFor="" className={`${weaponItem.name === weapon ? "bg-blue-400 text-white" : ""} mb-10 shadow-sm focus-within:bg-blue-400`}>
                                        <div className="flex items-center gap-2">
                                            {/* Selection by radio, updates state as well */}
                                            <input type="radio" name="weapon" value={weaponItem.name} onChange={(e) => setWeapon(e.target.value)}/>

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
                                            <input type="radio" name="ability" value={abilityItem.name} onChange={(e) => setAbility(e.target.value)}/>

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
                    <input name="name" className="inline-block shadow-md p-2" type="text" placeholder="Sir John the Magical..." onChange={(e) => setName(e.target.value)}/>
                    <button type="submit" className="p-2 bg-blue-500 text-white rounded-sm">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateCharacter;