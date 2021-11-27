import React from 'react';

function Result(props){
    function setStyle(){
        return {
            borderColor: props.color,
            color: props.color,
            fontSize: props.fontSize
        }
    }
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p>Color: {props.color} - fontsize: {props.fontSize}px</p>
            <div id='content' style={setStyle()}>
                Stay Hungry, Stay Foolish..... Run!
            </div> 
        </div>
    );
};

export default Result;