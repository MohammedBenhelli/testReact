import React, {useContext} from "react";
import ListStyle from "../style/ListStyle";
import ListContext from "../context/ListContext";
import CloseButton from '../style/closeButton';

export default function List(props) {
    const context = useContext(ListContext);

    // eslint-disable-next-line no-useless-constructor
    // constructor(props) {
    //     super(props);
    // }

    // render() {
    console.log(context, props)
    return (<ListStyle type={props.listType}>
        <h2>{props.listType}</h2>
        <div className={'list'}>
            {props.listType === `Done` && context.list.done.map((x, i) => (<div key={i} className={'row'}>
                <h4 className={'col--11'}>{x.name}</h4>
                <CloseButton className={'col--1'} onClick={() => context.removeList(i, props.listType)}>X</CloseButton>
                {x.description.length > 0 && <p className={'col-12'}>{x.description}</p>}
                <CloseButton doing className={'col--1'} onClick={() => context.doing(i, props.listType)}>Doing</CloseButton>
                <a className={'col--10'}/>
                <CloseButton toDo className={'col--1'} onClick={() => context.toDo(i, props.listType)}>To Do</CloseButton>
            </div>))}
            {props.listType === `To Do` && context.list.toDo.map((x, i) => (<div key={i} className={'row'}>
                <h4 className={'col--11'}>{x.name}</h4>
                <CloseButton className={'col--1'} onClick={() => context.removeList(i, props.listType)}>X</CloseButton>
                {x.description.length > 0 && <p className={'col--12'}>{x.description}</p>}
                <CloseButton doing className={'col--1'} onClick={() => context.doing(i, props.listType)}>Doing</CloseButton>
                <a className={'col--10'}/>
                <CloseButton done className={'col--1'} onClick={() => context.done(i, props.listType)}>Done</CloseButton>
            </div>))}
            {props.listType === `Doing` && context.list.doing.map((x, i) => (<div key={i} className={'row'}>
                <h4 className={'col--11'}>{x.name}</h4>
                <CloseButton className={'col--1'}  onClick={() => context.removeList(i, props.listType)}>X</CloseButton>
                {x.description.length > 0 && <p className={'col--12'}>{x.description}</p>}
                <CloseButton toDo className={'col--1'} onClick={() => context.toDo(i, props.listType)}>To Do</CloseButton>
                <a className={'col--10'}/>
                <CloseButton done className={'col--1'} onClick={() => context.done(i, props.listType)}>Done</CloseButton>
            </div>))}
        </div>
    </ListStyle>);
    // }
}
