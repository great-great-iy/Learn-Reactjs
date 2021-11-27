import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUsername : 'email/username',
            txtPassword : 'password',
            txtDesc : 'Mô tả....',
            sltGender: 0,
            rdLang : 'en',
            ckState : false
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }
 

    onHandleChange (event){
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }

    onHandleSubmit(event){
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container mt-50">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                    <h3 className="panel-title">Form</h3>
                            </div>
                            <div className="panel-body">
                                    
                                    <form onSubmit={this.onHandleSubmit}>
                                    
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                name="txtUsername"
                                                value={this.state.txtUsername}
                                                onChange={this.onHandleChange}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <input 
                                                type="password" 
                                                className="form-control" 
                                                name="txtPassword"
                                                value={this.state.txtPassword}
                                                onChange={this.onHandleChange}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Mô Tả: </label>
                                            <textarea 
                                                className="form-control" 
                                                rows="3"
                                                name="txtDesc"
                                                value={this.state.txtDesc}
                                                onChange={this.onHandleChange}
                                            ></textarea>
                                        </div>
                                        <label>Giới Tính: </label>
                                        <select 
                                            name="sltGender" 
                                            className="form-control"
                                            value={this.state.sltGender}
                                            onChange={this.onHandleChange}
                                            >
                                            <option value={0}>Nữ</option>
                                            <option value={1}>Nam</option>
                                        </select>
                                        <br/>

                                        <label>Ngôn ngữ</label>
                                        
                                        <div className="radio">
                                            <label>
                                                <input 
                                                    type="radio" 
                                                    name="rdLang" 
                                                    value="en" 
                                                    checked={this.rdLang === 'en'}
                                                    onChange={this.onHandleChange}/>
                                                English
                                            </label>
                                            <br/>
                                            <label>
                                                <input 
                                                    type="radio" 
                                                    name="rdLang" 
                                                    value="vi" 
                                                    checked={this.rdLang === 'vi'}
                                                    onChange={this.onHandleChange}/>
                                                Tieng Viet
                                            </label>
                                        </div>
                                        
                                        <div className="checkbox">
                                            <label>
                                                <input 
                                                    type="checkbox" 
                                                    name='ckState'
                                                    value={true}
                                                    checked={this.state.ckState === true}
                                                    onChange={this.onHandleChange}
                                                    />
                                                Trang Thai
                                            </label>
                                        </div>
                                        
                                        <button type="submit" className="btn btn-primary">Lưu Lại</button>&nbsp;
                                        <button type="reset" className="btn btn-Default">Xóa</button>
                                    </form>
                                    
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        );
    }
}

export default App;
