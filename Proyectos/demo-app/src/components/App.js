import React from "react";
import MainMenu from "./MainMenu";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

export const App = () => (
    <Router>
        <MainMenu />
        <Routes />
    </Router> 
)