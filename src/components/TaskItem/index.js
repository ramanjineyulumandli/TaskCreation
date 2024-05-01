// Write your code here

import {Component} from 'react'
// Write your code here
import './index.css'

class TaskItem extends Component {
  state = {
    status: '',
  }

  handleStatusUpdate = newStatus => {
    // Handle status update logic
    this.setState({status: newStatus})
    console.log('Task status updated to:', newStatus)
  }

  render() {
    const {status} = this.state
    const {taskDetails, toggleIsStarred} = this.props
    const {id, title, date, isStarred, description} = taskDetails
    const starImgUrl = isStarred
      ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

    const onClickStar = () => {
      toggleIsStarred(id)
    }

    return (
      <li className="task-item">
        <div className="header-container">
          <p className="title">{title}</p>
          <button
            type="button"
            //   testid="star"
            className="star-button"
            onClick={onClickStar}
          >
            <img src={starImgUrl} className="star" alt="star" />
          </button>
        </div>
        <p className="description">{description}</p>
        <p className="date">Date: {date}</p>
        <h2 className="head">Task Status</h2>
        <div className="buttons-con">
          <button
            type="button"
            className="button"
            onClick={() => this.handleStatusUpdate('in_progress')}
          >
            Start Task
          </button>
          <button
            type="button"
            className="button"
            onClick={() => this.handleStatusUpdate('completed')}
          >
            Complete Task
          </button>
        </div>
        <p className="para">Status: {status}</p>
      </li>
    )
  }
}
export default TaskItem
