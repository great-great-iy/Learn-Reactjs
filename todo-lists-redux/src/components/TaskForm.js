import React, {Component} from 'react';
import { connect  } from 'react-redux';
import * as actions from './../actions/index' ;



class TaskForm extends Component {
    
    constructor (props){
        super(props);
        this.state = {
            id : '',
            name : '',
            status : true
        }
    }

    componentWillMount() {
        if(this.props.itemEditing !== null){
            this.setState({
                id : this.props.itemEditing.id,
                name : this.props.itemEditing.name,
                status : this.props.itemEditing.status
            });
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            this.setState({
                id : nextProps.itemEditing.id,
                name : nextProps.itemEditing.name,
                status : nextProps.itemEditing.status
            });
        } else {
            this.onClear();
        }
    }

    onCloseForm = () => {
        this.props.onCloseForm();
        this.onClear();
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status'){
            value = (target.value === "true") ? true : false;
        }
        console.log(value);
        this.setState({
            [name] : value
        });
    }

    onSubmit = (event) =>{
        event.preventDefault();
        this.props.onSaveTask(this.state);
        if(this.props.itemEditing.id){
            this.onCloseForm();
        }
    }

    onClear = () => {
        this.props.onClearForm();
    }

    render(){
        var { id, name, status } = this.state;
        return(            
            <div className="panel panel-warning">
                <div className="panel-heading">
                        <h3 className="panel-title">
                            {id === '' ? "Thêm Công Việc" : "Cập Nhật Công Việc" }
                            <span
                                className="fa fa-times-circle text-right mr-15"
                                onClick={this.onCloseForm}>
                            </span>
                        </h3>
                        
                </div>
                <div className="panel-body">
                    
                    <form onSubmit = {this.onSubmit}>
                        <div className="form-group">
                            <label >Tên :</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="name"
                                value = {name}
                                onChange={this.onChange} 
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select 
                            className="form-control"
                            name="status" 
                            value = {status}
                            onChange={this.onChange}                            
                            >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br/>
                        <div className="text-center">
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                                ><span className="fa fa-plus mr-5"></span> Lưu Lại</button> &nbsp;
                            <button 
                                type="reset" 
                                className="btn btn-danger"
                                onClick={this.onClear}    
                            ><span><i className="fas fa-times mr-5"></i></span> Hủy Bỏ</button>
                        </div>
                    </form>
                    
                </div>
            </div>
            
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        itemEditing : state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onSaveTask : (task) =>{
            dispatch(actions.saveTask(task))
        },
        onCloseForm : () =>{
            dispatch(actions.closeForm())
        },
        onClearForm : () =>{
            dispatch(actions.clearForm())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (TaskForm);
