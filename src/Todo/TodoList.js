import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
    const [listOfTodos, setListOfTodos] = useState([])
    const addTodo = newTodo => {
        setListOfTodos( state => [...state, newTodo] )
    }
    const deleteTodos = todoId => {
        setListOfTodos( state => {
            return state.filter( todo => todo.id !== todoId)
        })
    }
    return (
        <div>
            <NewTodoForm addTodo={addTodo}/>
            <div>
                {listOfTodos.map( (todo, index) => {
                    let color
                    switch (index % 3) {
                        case 0:
                            color = "#FFAAAA"
                            break;
                        case 1:
                            color = "#AAFFAA"
                            break;
                        case 2:
                            color = "#AAAAFF"
                            break;
                    }
                    return (
                        <Todo
                            id={todo.id}
                            deleteMe={deleteTodos}
                            details = {todo}
                            color = {color}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default TodoList