import React from 'react';
import {NavLink} from "react-router-dom";


const Page06 = (props) => {

    return (
        <div>
            Page 06
            <NavLink to="/page05"> Перейти к предыдущему шагу</NavLink>
            <NavLink to="/page07"> Перейти к шагу 7</NavLink>
        </div>
    );
};

export default Page06;