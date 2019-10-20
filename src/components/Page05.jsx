import React from 'react';
import {NavLink} from "react-router-dom";


const Page05 = (props) => {

    return (
        <div>
            Page 05
            <NavLink to="/page04"> Перейти к предыдущему шагу</NavLink>
            <NavLink to="/page06"> Перейти к шагу 6</NavLink>

        </div>
    );
};

export default Page05;