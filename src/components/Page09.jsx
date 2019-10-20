import React from 'react';
import {NavLink} from "react-router-dom";


const Page09 = (props) => {

    return (
        <div>
            Последняя страница
            <NavLink to="/page08"> Перейти к предыдущему шагу</NavLink>
            <button>Хеппи энд</button>
        </div>
    );
};

export default Page09;