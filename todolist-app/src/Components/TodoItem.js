const TodoItem = (props) => {
    const {id , title} = props
    return(
        <div id = {id} className = "todoitem">
            {title}
            <p className = "tool">
            <div className = "check-wrapper"><input className = "check-box" type = "checkbox"></input></div>
            <div className = "trash-can-wrapper"><i  id = "trash-can" className="fa-solid fa-trash-can"></i></div>
            <div className = "edit-wrapper"><i  id = "edit" className="fa-solid fa-pen-to-square"></i></div>
            </p>
        </div>
    )
}
export default TodoItem ;