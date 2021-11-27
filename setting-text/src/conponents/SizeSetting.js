import React from 'react';

function SizeSetting(props){

      function changeSize(value){
            props.onChangeSize(value)
      }

    return (
        
        <div className="panel panel-warning">
              <div className="panel-heading">
                    <h3 className="panel-title">Size: {props.fontSize}px</h3>
              </div>
              <div className="panel-body">        
                    <button 
                        type="button" 
                        className="btn btn-success"
                        onClick={() => changeSize(2)}
                        >Tăng</button>&nbsp;
                    <button 
                        type="button" 
                        className="btn btn-success"
                        onClick={() => changeSize(-2)}
                        >Giảm</button>
              </div>
        </div>
                        
    );
};

export default SizeSetting;