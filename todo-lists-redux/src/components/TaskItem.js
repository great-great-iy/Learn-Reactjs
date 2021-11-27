import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index' ;

class TaskItem extends Component {
    onUpdateStatus = () =>{
        this.props.onUpdateStatus(this.props.task.id);
    }
    onDeleteTask = () =>{
        this.props.onDeleteTask(this.props.task.id);
    }
    onEditingTask = () =>{
        this.props.onOpenForm();
        this.props.onEditTask(this.props.task);
    }
    render(){
        var {index, task} = this.props;
        return(   
            <>
                <tr>
                    <td>{index  + 1}</td>
                    <td>{task.name}</td>
                    <td className="text-center">
                        <span 
                            className={(task.status === true ) ? "label label-success" : "label label-danger"}
                            onClick={this.onUpdateStatus}    
                        >
                            {task.status === true ? 'Kích Hoạt' : 'Ẩn'}
                        </span>
                    </td>
                    <td className="text-center">
                        <button 
                            type="button" 
                            className="btn btn-warning"
                            onClick = {this.onEditingTask}
                        >
                            <span className="fas fa-pencil mr-5"><i className="fas fa-pencil"></i></span>Sửa
                        </button>
                        &nbsp;
                        <button 
                            type="button" 
                            className="btn btn-danger"
                            onClick={this.onDeleteTask}
                        >
                            <span className="fa fa-trash mr-5"></span>Xóa
                        </button>
                    </td>
                </tr>
            </>           
        );
    }
}

const mapStateToProps = (state) =>{
    return {

    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onUpdateStatus : (id) =>{
            dispatch(actions.updateStatus(id))
        },
        onDeleteTask : (id) =>{
            dispatch(actions.deleteTask(id))
        },
        onOpenForm : () =>{
            dispatch(actions.openForm())
        },
        onEditTask : (task) => {
            dispatch(actions.editTask(task))
        }      
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (TaskItem);
