import { getImage } from '../components/characterinfo';
import { Link } from 'react-router-dom';
import { deleteCharacter } from '../services/CharactersAPI';

import { useNavigate } from 'react-router-dom';
// Card for the character, can be clicked
// to navigate to the detail page
const CharacterCard = (props) => {
    const navigate = useNavigate();

    // delete character and go back to home page
    async function deleteCharacterHelper(){
        await deleteCharacter(props.id);
        navigate("/");
    }

    return (
        <div className="mb-10 shadow-md rounded-md flex-1 max-w-xs min-w-[300px]" key={props.id}>
            {/* use character card here instead */}
            {/* name, class, weapon, ability */}
            <div className="bg-gray-900 text-white px-5 py-5">
                <img className="w-28 h-36 object-cover mb-5" src={getImage("classes", props.class)} alt="" />
                <p className="text-2xl">{props.name} </p>
                <p>class: {props.class}</p>
                <p>⛁ {props.price}</p>
            </div>
            <div className="flex mt-5 gap-4 px-8 mb-5">
                <img className="w-16" src={getImage("weapons", props.weapon)} alt="" />
                <p className="flex-1">weapon: <br />{props.weapon}</p>
            </div>
            <div className="flex gap-4 px-8 mb-5">
                <img className="w-16" src={getImage("abilities", props.ability)} alt="" />
                <p className="flex-1">ability: <br />{props.ability}</p>
            </div>
            <Link to={`/customcharacters/${props.id}`}className="block px-8 py-5 bg-blue-400 text-white text-lg">Details</Link>

            {/* Go to edit page */}
            <Link to={`/edit/${props.id}`} className="text-left block px-8 py-5 bg-blue-400 text-white text-lg">Edit</Link> 

            {/* Delete character */}
            <button onClick={deleteCharacterHelper}className="text-left w-full block px-8 py-5 bg-red-400 text-white text-lg">Delete</button>
        </div>
    );
};

export default CharacterCard;