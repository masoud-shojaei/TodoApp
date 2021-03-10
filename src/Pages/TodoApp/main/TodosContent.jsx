import Aside from '../asid/FiltersAside'
import Main from './Main'


function TodosContent() {

  return (
    <section className="todos">
      <div className="container">
        <ul className="inner d-flex">
          <Aside />
          <Main/>
        </ul>
      </div>
    </section>
  )
  
}

export default TodosContent
