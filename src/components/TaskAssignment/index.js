import {Component} from 'react'
import './index.css'

class TaskAssignment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      assignedUser: '',
    }
  }

  handleAssignTask = userId => {
    // Handle task assignment logic
    this.setState({assignedUser: userId})
    console.log('Task assigned to:', userId)
  }

  render() {
    const {assignedUser} = this.state
    return (
      <div className="assign-con">
        <h2 className="assign-head">Assign Task</h2>
        <select
          className="op-con"
          value={assignedUser}
          onChange={e => this.handleAssignTask(e.target.value)}
        >
          <option value="">Select User</option>
          <option value="User1">User 1</option>
          <option value="User2">User 2</option>
          {/* More options */}
        </select>
        <p className="status">Task Assigned to: {assignedUser}</p>
      </div>
    )
  }
}

export default TaskAssignment
