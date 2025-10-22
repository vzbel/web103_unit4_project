import React from 'react'
import '../App.css'
import { useParams } from 'react-router-dom';
import { getCharacter, deleteCharacter } from '../services/CharactersAPI'; 
import { getImage } from '../components/characterinfo';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


// Display the details of the character,
// along with buttons to edit and delete the character
const CharacterDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = React.useState({});
    // get the information of the character from the DB
    React.useEffect(()=>{
        async function getCharacterData(){
            const data = await getCharacter(id);
            setCharacter(data);
        }
        getCharacterData();
    }, [id]);

    // delete character and go back to home page
    async function deleteCharacterHelper(){
        await deleteCharacter(id);
        navigate("/");
    }

    return (
        character.id ? 
        <div className="mt-10 mb-10 shadow-md rounded-md flex-1 max-w-xs min-w-[300px] mx-auto" key={character.id}>
            {/* name, class, weapon, ability */}
            <div className="bg-gray-900 text-white px-5 py-5">
                <img className="w-28 h-36 object-cover mb-5" src={getImage("classes", character["class"])} alt="" />
                <p className="text-2xl">{character.name} </p>
                <p>class: {character["class"]}</p>
            </div>
            <div className="flex mt-5 gap-4 px-8 mb-5">
                <img className="w-16" src={getImage("weapons", character.weapon)} alt="" />
                <p className="flex-1">weapon: <br />{character.weapon}</p>
            </div>
            <div className="flex gap-4 px-8 mb-5">
                <img className="w-16" src={getImage("abilities", character.ability)} alt="" />
                <p className="flex-1">ability: <br />{character.ability}</p>
            </div>

            {/* Go to edit page */}
            <Link to={`/edit/${character.id}`} className="text-left block px-8 py-5 bg-blue-400 text-white text-lg">Edit</Link> 

            {/* Delete character */}
            <button onClick={deleteCharacterHelper}className="text-left w-full block px-8 py-5 bg-red-400 text-white text-lg">Delete</button>
        </div>
        : 
        <>Loading character...</>
    )
};

export default CharacterDetails;