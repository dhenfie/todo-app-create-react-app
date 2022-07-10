import React, { useContext, useEffect } from 'react';
import List from '../components/List';
import { AppContext } from '../store/store';

export default function Home() {
    const appCtx = useContext(AppContext);
    
    useEffect(() => { window.document.title = 'Home'; }, []);

    return (
        <ul className="list-group list-group-flush my-2">
            <li className="list-group-item list-group-item-primary"> Todo List</li>
            {appCtx.state.items.map((value) => <List id={value.id} name={value.name} key={value.id} />)}
        </ul>
    );
}