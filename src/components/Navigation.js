import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../store/store';

export default function Navigation() {

    const app = useContext(AppContext);

    return (
        <header className="header mb-4">
            <div className="container-md d-flex flex-row align-items-center justify-content-between">
                <div className="navbar-brand text-primary">{app.state.appName}</div>
                <nav className="nav flex-row nav-pills">
                    <div className="nav-item"> <NavLink to="/" className="nav-link"> <span className="bi bi-house-fill"></span> </NavLink> </div>
                    <div className="nav-item"> <NavLink to="add" className="nav-link"> <span className="bi bi-plus-circle-fill"></span> </NavLink> </div>
                    <div className="nav-item"> <NavLink to="/setting" className="nav-link"> <span className="bi bi-gear-fill"></span> </NavLink> </div>
                </nav>
            </div>
        </header>
    );
}