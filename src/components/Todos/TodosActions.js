import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'

import styles from '../UI/Button.module.css'

function Button2(props) {
  const { onClick, children, title, disabled = false } = props
  return (
    <button
      {...props}
      className={styles.Button2}
      onClick={onClick}
      title={title}
      disabled={disabled}>
      {children}
    </button>
  )
}
function TodosActions({
  resetTodos,
  deleteCompletedTodo,
  completedTodosCount,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button2 title="Reset" onClick={resetTodos}>
        <RiRefreshLine />
      </Button2>
      <Button2
        title="Delete"
        onClick={deleteCompletedTodo}
        disabled={!completedTodosCount}>
        <RiDeleteBin2Line />
      </Button2>
    </div>
  )
}

export default TodosActions
