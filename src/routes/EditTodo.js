import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../store/store';

/**
 * Edit todo item
 * 
 * @returns {React.ReactElement}
 */
export default function EditTodo() {

    const [input, setInput] = useState('');
    const params = useParams();
    const todo = useContext(AppContext);
    const getTodoById = todo.state.items.filter((value) => value.id === params.id);
    const getTodo = getTodoById[0];
    useEffect(() => {
        window.document.title = 'Edit Todo';
        setInput(getTodo.name);
    }, []);

    const handleClick = (dispath) => {
        dispath({
            type: "EDIT",
            payload: [{
                id: getTodo.id,
                name: input
            }]
        });
    };

    return (
        <AppContext.Consumer>
            {({ state, dispath }) => {
                return (
                    <div className="card">
                        <div className="card-header"> Edit <strong> {getTodo.name} </strong> </div>
                        <div className="card-body">
                            <input type="text" className="form-control" value={input} onChange={(e) => setInput(e.target.value)} />
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-primary" onClick={() => handleClick(dispath)}> Edit </button>
                        </div>
                    </div>
                );
            }}
        </AppContext.Consumer>
    );
}