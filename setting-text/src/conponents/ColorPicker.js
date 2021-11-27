import React, {useState} from 'react';

function ColorPicker(props){

    const [textStyle, setTextStyle] = useState({
        colors: ['red', 'green', 'blue', '#000']
    });

    function showColor(color) {
        return {
            backgroundColor: color,
            padding: 20,
            marginRight: 20,
            marginleft: 20
        }
    }

    function setActiveColor(color){
        props.onReceiveColor(color);
    }

    var elmColors = textStyle.colors.map((color, index) => {
        return <div 
            key={index} 
            style={showColor(color)}
            className={props.color === color ? 'active' : ''}
            onClick={() => setActiveColor(color)}
            ></div>
    });

    return (
        
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            
            <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color Picker</h3>
                    </div>
                    <div className="panel-body">
                        {elmColors}
                    </div>
            </div>
            
        </div>
                
    );
};

export default ColorPicker;