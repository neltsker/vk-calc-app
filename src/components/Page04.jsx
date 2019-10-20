import React from 'react';
import {NavLink} from "react-router-dom";


const Page04 = () => {

    return (
        <div>
            Page 04
            <NavLink to="/page03"> Перейти к предыдущему шагу</NavLink>
            <NavLink to="/page05"> Перейти к шагу 5</NavLink>
        </div>
    );
};

export default Page04;