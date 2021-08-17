import { useSelector } from 'react-redux';

function MushroomList() {
    const mushrooms = useSelector(store => store.mushrooms);

    return (
        <>
          {mushrooms.map(mushy => (
            <li>
              {mushy}
            </li>
          ))}
        </>
    );
}

export default MushroomList;