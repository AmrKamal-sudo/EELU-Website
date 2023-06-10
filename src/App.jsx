import React from 'react';
import './App.scss';


function App({children}) {
    return (
        <div className="main-container">
            {children}
        </div>
    );
}

export default App;
