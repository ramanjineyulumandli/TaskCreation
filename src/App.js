import TaskCreation from './components/TaskCreation'
import TaskAssignment from './components/TaskAssignment'
import './App.css'

const App = () => (
  <>
    <TaskCreation />
    <div className="con">
      <TaskAssignment />
    </div>
  </>
)

export default App
