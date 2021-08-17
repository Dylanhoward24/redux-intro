import { useState } from 'react';
import { useDispatch } from 'react-redux';

function MushroomForm() {

    // must do this in every new component if using dispatch
    const dispatch = useDispatch();

    // track the value of mushroom field form
    const [mushroomInput, setMushroomInput] = useState('');

    return (
        <>
            <input
                type="text"
                placeholder="Add new shroomy"
                onChange={(evt) => setMushroomInput(evt.target.value)}
                value={mushroomInput}
            />
            <button onClick={() => dispatch ({
                type: 'ADD_MUSHROOM',
                payload: mushroomInput
            })}>
                Add shroomy
            </button>
        </>
    );
}

export default MushroomForm;