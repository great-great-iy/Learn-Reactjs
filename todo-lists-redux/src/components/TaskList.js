import React, {Component} from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from './../actions/index' ;


class TaskList extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        var filter = {
            name: name === 'filterName' ? value : this.state.filterName,
            status: name === 'filterStatus' ? value : this.state.filterStatus
        };
        this.props.onFilterTable(filter);
    }

    render(){
        var { tasks, filterTable, searchTask, sortTask } = this.props;
        if(filterTable.name){
            tasks = tasks.filter((task)=>{
                return task.name.toLowerCase().indexOf(filterTable.name) !== -1;
            });
        }
        tasks = tasks.filter((task)=>{
            if(filterTable.status === -1){
                return task;
            }else{
                return task.status === (filterTable.status === 1 ? true : false);
            }
        });

        if(searchTask.keyword !==''){
            tasks = tasks.filter((task)=>{
                return task.name.toLowerCase().indexOf(searchTask.keyword) !== -1;
            });
        }

        if(sortTask.by==='name'){
            tasks.sort((a, b) => {
                if(a.name > b.name) return sortTask.value;
                else if(a.name < b.name) return -sortTask.value
                else return 0;
            });
        } else {
            tasks.sort((a, b) => {
                if(JSON.stringify(a.status)  > JSON.stringify(b.status)) return -sortTask.value;
                else if(JSON.stringify(a.status)  < JSON.stringify(b.status)) return sortTask.value
                else return 0;
            });
        }

        var eleTasks = tasks.map((task, index) => {
            return <TaskItem 
                        key={index} 
                        index={index} 
                        task = {task}
                    />
        });
        return(   
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Tên</th>
                                <th className="text-center">Trạng Thái</th>
                                <th className="text-center">Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input 
                                        type="text"
                                        name = "filterName"
                                        value = { filterTable.name }
                                        onChange = { this.onChange }
                                        className="form-control" 
                                    />
                                </td>
                                <td>
                                    <select 
                                        name = "filterStatus"
                                        value = { filterTable.status }
                                        onChange = { this.onChange }
                                        className="form-control"
                                    >
                                        <option value='-1'>Tất Cả</option>
                                        <option value='0'>Ẩn</option>
                                        <option value='1'>Kích Hoạt</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            { eleTasks }
                        </tbody>
                    </table>
                </div>
            </div>           
        );
    }
}

const mapStateToProps = (state) =>{
    return { 
        tasks : state.tasks,
        filterTable : state.filterTable,
        searchTask : state.searchTask,
        sortTask : state.sortTask
    }
};

const mapDispatchToProps = (dispatch, props) =>{
    return {   
        onFilterTable : (filter) =>{
            dispatch(actions.filterTask(filter))
        }        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
