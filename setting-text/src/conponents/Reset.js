import React from 'react';

function Reset(props){
    function onResetDefault(){
        props.onSettingDefault();
    }
    return <button 
        type="button" 
        className="btn btn-primary"
        onClick={onResetDefault}
        >Reset</button>;
};

export default Reset;

