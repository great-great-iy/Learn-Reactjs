import React, { useState } from 'react';
import './App.css';
import ColorPicker from './conponents/ColorPicker';
import Reset from './conponents/Reset';
import Result from './conponents/Result';
import SizeSetting from './conponents/SizeSetting';

function App() {
  const [txtStyle, setTxtSyle] = useState({
    color: 'red',
    fontSize: 16
  });

  function onSetColor(params){
    setTxtSyle({
      color: params,
      fontSize: txtStyle.fontSize
    });
  }

  function onSetSize(value){
    setTxtSyle({
      color: txtStyle.color,
      fontSize: (txtStyle.fontSize + value >= 8 && txtStyle.fontSize + value <= 36) ? txtStyle.fontSize + value : txtStyle.fontSize
    });
  }
  
  function onSetDefault(){
    setTxtSyle({
      color: 'red',
      fontSize: 16
    });
  }

    return (
      <div className="container mt-50">
        <div className="row">
          <ColorPicker color={txtStyle.color} onReceiveColor={onSetColor}/>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting fontSize={txtStyle.fontSize} onChangeSize={onSetSize}/>
            <Reset onSettingDefault={onSetDefault}/>
          </div>
          <Result 
            color={txtStyle.color} 
            fontSize={txtStyle.fontSize}/>
        </div>            
      </div>
    );
}

export default App;
