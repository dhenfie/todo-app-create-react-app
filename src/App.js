import { Outlet } from 'react-router-dom';
import { useReducer } from "react";
import { AppContext, initialState, reduce } from './store/store';
import Navigation from './components/Navigation';

export default function App() {
  const [state, dispath] = useReducer(reduce, initialState);

  return (
    <AppContext.Provider value={{ state, dispath }}>
      <Navigation />
      <div className="container mx-auto">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">
            <Outlet />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}