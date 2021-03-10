import TodosHeader from './TodosHeader'
import TodosList from './TodosList'

function Main() {

  return (
    <li className="todos-board">
      <main className="light-bgc">
        <TodosHeader />
        <TodosList />
      </main>
    </li>
  )
  
}

export default Main
