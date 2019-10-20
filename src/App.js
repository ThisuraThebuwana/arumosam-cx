import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Header from "./pages/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <body>
                <Home/>
            </body>

        </div>
    );
}

export default App;
