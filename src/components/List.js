import { useNavigate } from 'react-router-dom';

export default function List({ id, name }) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/edit/" + id);
    };

    return <div className="list-group-item list-group-item-action" onClick={handleClick}> {name} </div>;
};