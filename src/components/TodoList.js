import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todoList = this.props.todoList.map((todo, i) => {
            return (
                <Todo key={i} text={todo.description} text={todo.name} text={todo.email} priority={todo.status} dueDate={todo.dueDate}/>
            );
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>description</th>
                    <th>name</th>
                    <th>email</th>
                    <th>status</th>
                    <th>Due Date</th>
                </tr>
                </thead>
                <tbody>
                {todoList}
                </tbody>
            </table>
        );


    }

}