import React from 'react';
import {NavLink} from "react-router-dom";
import InputRadio from "./InputRadio";
import img01 from "../media/layout/01.png";
import img02 from "../media/layout/02.png";



const Page03 = (props) => {

    return (
        <div>
            <div className='row justify-content-center mb-4 mt-4'>
                <p >
                    Шаг 3 из 9.
                </p>
            </div>
            <div className="progress w-75 mx-auto mb-4">
                <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" style={{width: '36%'}}
                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"  ></div>
            </div>
            <div className='w-100'><h2 className='text-center'>Какие фасады вам нравятся больше?</h2></div>
            <div className="inputContainer">
                <InputRadio changeInput={props.changeInput} header="Прямая" img={img01}  name="layout" value="facade1" id="f1" checked={props.layout}/>
                <InputRadio changeInput={props.changeInput} header="Угловая" img={img02}  name="layout" value="facade2"  id="f2" checked={props.layout}/>
            </div>
            <NavLink to="/page02" className="buttonGo"> Перейти к шагу 2 ></NavLink>
        </div>
    );
};

export default Page03;