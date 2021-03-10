import Layout from '../../Components/layout/Layout'
import Blog from '../blog/Blog'
import TodoContent from './main/TodosContent'
import {Switch, Route} from 'react-router-dom'

import './main/style.css';

function TodoApp() {
  return (
    <Switch>
      <Route exact path='/' >
      <Layout>
         <TodoContent />
       </Layout>
      </Route>
      <Route path='/blog'>
        <Layout>
          <Blog />
        </Layout>
      </Route>
    </Switch>
  )
}

export default TodoApp
