import React from "react";
import './HeaderLinks.css';
import { Link } from 'react-router-dom';

const HeaderLinks =()=>{
    return(
        <React.Fragment>
            <div className="Nav_links">
                <Link to="/bmgame">BM Game</Link>
                <Link to="/bmgalaxy">BM Galaxy</Link>
                <Link to="/bmmega">BM Mega</Link>
                <Link to="/">BM Music</Link>
                <Link to="/bmjewel">BM Jewel</Link>
                <Link to="/bmlast">BM Cards</Link>
                <Link to="#">BM Learn</Link>
            </div>

        </React.Fragment>
    )
}

export default HeaderLinks;