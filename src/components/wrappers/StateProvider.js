import React, {Component} from 'react';
import {FILTER_ALL} from '../../services/filter';
import {MODE_CREATE, MODE_NONE} from '../../services/mode';
import {objectWithOnly, wrapChildrenWith} from '../../util/common';
import Axios from 'axios';
class StateProvider extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            mode: MODE_CREATE,
            filter: FILTER_ALL,
            list: [],
            value:'',
            dateValue:'',
        }
    }
   async componentDidMount(){
        const data = await this.getTodos();
        this.setState({list:data.data})
    }

    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, ['changeFilter', 'changeStatus', 'changeMode', 'setSearchQuery', 'handleSubmit', 'handleInputBoxVal', 'handleInputDateVal'])
        });

        return <div>{children}</div>;
    }

     async getTodos(){
        const user = window.localStorage.getItem('user');
        if(user){
        const token = localStorage.getItem('jwtToken');
        const data = await Axios.get(`http://localhost:3000/${user}/todos`,{ headers: {"Authorization" : `${token}`} })
            return data;
        }
        return []
       
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = window.localStorage.getItem('user');
        const { value, dateValue } = this.state;
        const data = {
            name : value,
            date : dateValue,
            user : user
        }
        const token = localStorage.getItem('jwtToken');
        Axios.post(`http://localhost:3000/todos/add-todo`, data,{ headers: {"Authorization" : `${token}`} }).then(async (res)=>{
           const data = await this.getTodos();
           this.setState({
               dateValue:'',
               value:'',
               list: data.data
           })
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    handleInputBoxVal(e) {
        const {value} = e.target;
        this.setState({value:value})
    }

    handleInputDateVal(e) {
        const {value} = e.target;
        this.setState({dateValue:value})
    }

    changeFilter(filter) {
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('jwtToken');
        Axios.post(`http://localhost:3000/${user}/todos/type`, {status:filter}, { headers: {"Authorization" : `${token}`} }).then((data)=>{
            this.setState({
                list: data.data,
                filter
            })
        })
        .catch((err)=>{
            console.log(err);
        })

    }

    changeStatus(itemId, completed) {
        const user = localStorage.getItem('user')
        const token = localStorage.getItem('jwtToken')
        const payLoad = {user:user};
        payLoad.status = completed ? 'completed' : 'inprogress';
        Axios.post(`http://localhost:3000/todos/${itemId}`, payLoad, { headers: {"Authorization" : `${token}`} }).then(async ()=>{
            const data = await this.getTodos();
            this.setState({
                list:data.data
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    changeMode(mode = MODE_NONE) {
        this.setState({mode});
    }

    setSearchQuery(text) {
        this.setState({query: text || ''});
    }
}

export default StateProvider;
