import React from 'react';
import Header from './style/header';
import Grid from './style/grid';
import List from "./component/List";
import ListContext from "./context/ListContext";
import InputList from "./component/InputList";


class App extends React.Component{
    constructor(props) {
        super(props);
        if (localStorage.getItem("list") === null)
            localStorage.setItem("list", JSON.stringify({
                toDo: [],
                doing: [],
                done: []
            }));
        this.state = {
            list: JSON.parse(localStorage.getItem("list"))
        }
    }

    addList = (name, description) => {
        console.log(name, description)
        let newList = JSON.parse(localStorage.getItem('list'));
        if (name.length >= 4)
            newList.toDo.push({name: name, description: description});
        localStorage.setItem('list', JSON.stringify(newList));
        this.setState({list: newList});
    };

    removeList = (index, type) => {
        console.log(index, type)
        let listCpy = this.state.list;
        if (type === `To Do`)
            listCpy.toDo.splice(index, 1);
        if(type === `Doing`)
            listCpy.doing.splice(index, 1);
        if (type === `Done`)
            listCpy.done.splice(index, 1);
        localStorage.setItem('list', JSON.stringify(listCpy));
        this.setState({list: listCpy});
    }

    doing = (index, type) => {
        console.log(index, type)
        let listCpy = this.state.list;
        if (type === `To Do`) {
            listCpy.doing.push(listCpy.toDo[index]);
            listCpy.toDo.splice(index, 1);
        }
        if (type === `Done`) {
            listCpy.doing.push(listCpy.done[index]);
            listCpy.done.splice(index, 1);
        }
        localStorage.setItem('list', JSON.stringify(listCpy));
        this.setState({list: listCpy});
    }

    done = (index, type) => {
        console.log(index, type)
        let listCpy = this.state.list;
        if (type === `To Do`) {
            listCpy.done.push(listCpy.toDo[index]);
            listCpy.toDo.splice(index, 1);
        }
        if (type === `Doing`) {
            listCpy.done.push(listCpy.doing[index]);
            listCpy.doing.splice(index, 1);
        }
        localStorage.setItem('list', JSON.stringify(listCpy));
        this.setState({list: listCpy});
    }

    toDo = (index, type) => {
        console.log(index, type)
        let listCpy = this.state.list;
        if (type === `Done`) {
            listCpy.toDo.push(listCpy.done[index]);
            listCpy.done.splice(index, 1);
        }
        if (type === `Doing`) {
            listCpy.toDo.push(listCpy.doing[index]);
            listCpy.doing.splice(index, 1);
        }
        localStorage.setItem('list', JSON.stringify(listCpy));
        this.setState({list: listCpy});
    }

    render() {
        return (<ListContext.Provider value={{
            list: this.state.list,
            addList: this.addList,
            removeList: this.removeList,
            doing: this.doing,
            done: this.done,
            toDo: this.toDo
        }}>
            <Header>
                <h1>To Do List</h1>
                <InputList/>
            </Header>
            <Grid>
                <div className="container row">
                    <div className="col--12-smart col--6-tablet col--4-desk col--4-desk-xl">
                        <List listType={`To Do`}/>
                    </div>
                    <div className="col--12-smart col--6-tablet col--4-desk col--4-desk-xl">
                        <List listType={`Doing`}/>
                    </div>
                    <div className="col--12-smart col--6-tablet col--4-desk col--4-desk-xl">
                        <List done listType={`Done`}/>
                    </div>
                </div>
            </Grid>
        </ListContext.Provider>);
    }
}

export default App;
