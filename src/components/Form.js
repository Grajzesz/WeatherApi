import React from 'react';

const Form = props => {
    return (
        <div className="formularz">
            <form onSubmit = {props.submit}>
                <input
                    type="text"
                    value={props.value}
                    onChange={props.change}
                    placeholder={'Miasto'}
                />
                <button>Wyszukaj miasto</button>
            </form>
        </div>
    );
};
export default Form;
