import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index' ;

class Sort extends Component {
   
    onClick = (sortBy, sortValue) => {
        this.props.onSortTask({ 
            by : sortBy,
            value : sortValue
        });
    }

    render(){
        var { sortTask } = this.props;
        return(
            <>                
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="dropdown">                                    
                        <button 
                            className="btn btn-primary dropdown-toggle" 
                            type="button" 
                            id="dropdownMenu1" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="true">
                            Sắp Xếp <span className="far fa-caret-square-down ml-5"></span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li onClick = { () => this.onClick('name', '1')}>
                                <a role="button">
                                    <span className="fas fa-sort-alpha-down pr-5">
                                        Tên A-Z
                                    </span>
                                    {(sortTask.by==='name' && sortTask.value === 1) ? <i class="fas fa-check display-after"></i> : ''}
                                </a>
                            </li>
                            <li onClick = { () => this.onClick('name', '-1')}>
                                <a role="button">
                                    <span className="fas fa-sort-alpha-down-alt pr-5">
                                        Tên Z-A
                                    </span>
                                    {(sortTask.by==='name' && sortTask.value === -1) ? <i class="fas fa-check display-after"></i> : ''}
                                </a>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li onClick = { () => this.onClick('status', '1')}>
                                <a role="button">
                                    Trạng Thái Kích Hoạt
                                </a>
                                {(sortTask.by==='status' && sortTask.value === 1) ? <i class="fas fa-check display-after"></i> : ''}
                            </li>
                            <li onClick = { () => this.onClick('status', '-1')}>
                                <a role="button">
                                    Trạng Thái Ẩn
                                </a>
                                {(sortTask.by==='status' && sortTask.value === -1) ? <i class="fas fa-check display-after"></i> : ''}
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </>
            
        );
    }
}

const mapStateToProps = (state) =>{
    return { 
        sortTask : state.sortTask
    }
};

const mapDispatchToProps = (dispatch, props) =>{
    return {   
        onSortTask : (sort) =>{
            dispatch(actions.sortTask(sort))
        }   
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Sort);
