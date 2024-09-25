import React, { useContext } from "react";
import { ThemeContext } from './ThemeProvider';
import PanelPrincipal from "./PanelPrincipal";
import "./ComponentePrincipal.scss";

function ComponentePrincipal(){
    const { theme } = useContext(ThemeContext);
return(
    <div className="ComponentePrincipal" style={{background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff'}}>
        <PanelPrincipal/>
    </div>
)
}

export default ComponentePrincipal;