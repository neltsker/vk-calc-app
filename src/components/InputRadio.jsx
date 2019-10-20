import React from 'react';

const InputRadio = (props) => {
    let checked = props.checked === props.id? true : false;
    return (
        <label  htmlFor={props.id}>
            <div className='inputSell'>
                <div>
                        <p className='inputRadioHeader'>{props.header}</p>
                </div>
                <div className='inputRadioImgShell'>
                        <img className='inputRadioImg' src={props.img} alt={props.header}/>
                </div>
                <div className='inputRadioSell' >
                    <input className="inputRadio" type="radio" name={props.name}
                           value={props.value} id={props.id} checked={checked} onChange={() => {props.changeInput(props.id)}} />
                           <label htmlFor={props.id} className="insteadRadio"></label>
                </div>
            </div>
        </label>
    );
};

export default InputRadio;