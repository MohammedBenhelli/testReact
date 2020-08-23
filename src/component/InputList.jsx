import React from 'react';
import Grid from '../style/grid';
import InputButton from '../style/inputButton';
import ListContext from "../context/ListContext";

export default class InputList extends React.Component {
    static contextType = ListContext;

    constructor(props) {
        super(props);
        this.state = {
            name: ``,
            description: ``
        }
    }

    addList = (e) => {
        if(this.state.name.length >= 4)
            this.context.list.toDo.push(this.state);
        console.log(this.state, this.context, e);
        localStorage.setItem('list', JSON.stringify(this.context.list));
    }

    render() {
        return (<Grid>
            <div className={'row'}>
                <h3 className={'col--6-smart col--2-tablet col--2-desk col--2-desk-xl'}>Name:</h3>
                <input className={'col--6-smart col--3-tablet col--3-desk col--3-desk-xl'} type="text"
                       onChange={(e) => this.setState({name: e.target.value})}/>
                <h3 className={'col--6-smart col--2-tablet col--2-desk col--2-desk-xl'}>Description:</h3>
                <input className={'col--6-smart col--3-tablet col--3-desk col--3-desk-xl'} type="text"
                       onChange={(e) => this.setState({description: e.target.value})}/>
                <InputButton onClick={e => this.context.addList(this.state.name, this.state.description)}>Add</InputButton>
            </div>
        </Grid>);
    }

    componentWillUnmount() {
        localStorage.setItem('list', JSON.stringify(this.context));
    }
}
