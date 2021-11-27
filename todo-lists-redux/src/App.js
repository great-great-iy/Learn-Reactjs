import React, {Component} from 'react';
import './App.css';
import Control from './components/Control';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            sort : {
                sortName : 'name',
                sortStatus : 1
            }
        }
    }


    isAddTask = () =>{
        this.onClear();
        this.props.onOpenForm();
    }

    onClear = () => {
        this.props.onClearForm();
    }


    onSort = (sortByName, sortByStatus) => {
        sortByStatus = parseInt(sortByStatus, 10);
        this.setState({
            sort : {
                sortName : sortByName,
                sortStatus : sortByStatus
            }
        })
    }

    /*--------------------Render--------------------*/
    render(){
        var { isDisplayForm } = this.props;

        return(            
            <div className="container">
                <div className='text-center'>
                    <h1>Quản Lý Công Việc</h1><hr/>
                </div>
                
                <div className="row">                    
                    <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}>
                        {isDisplayForm ? <TaskForm/> : ''}                        
                    </div>                    
                    
                    <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>                        
                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={this.isAddTask}
                        >
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button> &nbsp;
                                                
                        {/* Search & Sort */}
                        <Control/>

                        {/* Task List */}
                        <TaskList/>

                    </div>                    
                </div>                
            </div>            
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        isDisplayForm : state.isDisplayForm,
        itemEditing : state.itemEditing
    }
};

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onOpenForm : () =>{
            dispatch(actions.openForm())
        },
        onClearForm : () =>{
            dispatch(actions.clearForm())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
