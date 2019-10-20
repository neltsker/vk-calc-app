import React from 'react';
import {NavLink} from "react-router-dom";


const Page08 = (props) => {

    return (
        <div>
            Page 08
            <NavLink to="/page07"> Перейти к предыдущему шагу</NavLink>
            <NavLink to="/page09"> Перейти к шагу 5</NavLink>
        </div>
    );
};

export default Page08;