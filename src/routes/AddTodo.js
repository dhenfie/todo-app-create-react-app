import { Fragment, useEffect, useState } from 'react';
import { AppContext } from '../store/store';

export default function AddTodo() {


    const [input, setInput] = useState('');

    useEffect(() => { window.document.title = 'Add Item'; }, []);

    const handleClick = (value, handle) => {
        handle({
            type: 'PUSH',
            payload: {
                id: Date.now().toString(),
                name: value
            }
        });
    };

    return (
        <Fragment>
            <AppContext.Consumer>
                {({ dispath }) => {
                    return (
                        <div className="card">
                            <div className="card-header"> Add Todo  </div>
                            <div className="card-body">
                                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="form-control" />
                            </div>
                            <div className="card-footer">
                                <button type="button" onClick={() => handleClick(input, dispath)} className="btn btn-primary"> Submit </button>
                            </div>
                        </div>
                    );
                }}
            </AppContext.Consumer>
        </Fragment>
    );
}