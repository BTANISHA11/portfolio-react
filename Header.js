import React from "react";
import './styles/Header.css';
import {Close, MenuBookOutlined} from "@material-ui/icons";
import {Link} from 'react-router-dom';

const Header = ( ) => {
    return (
        <div className="header">
            <div className="header_logo">
            <h1>Simplilearn</h1>
            </div>

            <nav>
                <ul>
                    <div className="closed">
                        <Close className='close'/>
                    </div>
                    {/* <a>
                        <Link to = '/'>Home </Link>
                    </a>
                    <li>
                        <Link to = '/'>About </Link>
                    </li>
                    <li>
                        <Link to = '/'>Portfolio </Link>
                    </li>
                    <li>
                        <Link to = '/'>Blog </Link>
                    </li>
                    <li>
                        <Link to = '/'>Contact </Link>
                    </li>
                     */}
                     <a href={Link}>Home</a>
                </ul>
            </nav>

            <div className="changer">
                <MenuBookOutlined className="menu"/>
            </div>
        </div>
    )
}
export default Header