import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../store/store';

export default function Setting() {

    const [input, setInput] = useState("");
    const appCtx = useContext(AppContext);

    useEffect(() => {
        window.document.title = 'Seting';
        setInput(appCtx.state.appName);
    }, []);

    const handleClick = (dispath) => dispath({
        type: "SET_TITLE",
        payload: input
    });

    return (
        <AppContext.Consumer>
            {({ state, dispath }) => {
                return (
                    <div className="card">
                        <div className="card-header"> {state.appName} </div>
                        <div className="card-body">
                            <label htmlFor="setting" className="form-label"> AppName </label>
                            <input type="text" className="form-control" value={input} onChange={(e) => setInput(e.target.value)} />
                        </div>
                        <div className="card-footer">
                            <button type="button" onClick={() => handleClick(dispath)} className="btn btn-primary"> Save </button>
                        </div>
                    </div>
                );
            }}
        </AppContext.Consumer>
    );
}