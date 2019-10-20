import React from 'react';
import {NavLink} from "react-router-dom";


const Page07 = (props) => {

    return (
        <div>
            Page 07
            <NavLink to="/page06"> Перейти к предыдущему шагу</NavLink>
            <NavLink to="/page08"> Перейти к шагу 5</NavLink>
        </div>
    );
};

export default Page07;