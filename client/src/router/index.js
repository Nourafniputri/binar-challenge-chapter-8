import React from "react";
import { Routes,Route } from "react-router-dom";

// PAGES
import playerList from "../pages/playerList";

function Router() {
    return (
        <Routes>
            <Route path="/" Component={playerList}/>
        </Routes>
    )
}

export default Router;

