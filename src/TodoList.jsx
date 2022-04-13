import TodoItem from "./TodoItem"

export default function TodoList({todos}) {
    return (
        <ul>
            {todos.map(item=> {
                return <TodoItem  key={item.id} {...item}/>
            })}
        </ul>
    )
}