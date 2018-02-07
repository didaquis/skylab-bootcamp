/* 
div#root    
	DoneTaskList
		TaskInput
		PendingTaskList
		CompletedTaskList
 */

'use strict';

class DoneTaskList extends React.Component {
	constructor() {
		super()

		this.state = {
			tasks: [],
			completedTasks: []
		}
	}

	addTask = (task) => {
		this.setState(prevState => {
			return {
				tasks: prevState.tasks.concat(task)
			}
		})
	}

	removeTask = index => {
		this.setState(prevState => {
			return {
				completedTasks: prevState.completedTasks.concat(prevState.tasks[index]),
				tasks: prevState.tasks.filter((task, _index) => {
					return index !== _index
				})
			}
		})
	}

	render() {
		return <div>
			<TaskInput onAddTask={this.addTask} />
			<PendingTaskList tasks={this.state.tasks} onRemoveTask={this.removeTask} />
			<CompletedTaskList completedTasks={this.state.completedTasks} />
		</div>
	}
}




class TaskInput extends React.Component {
	constructor() {
		super()

		this.state = {
			input: ''
		}
	}

	keepInput = e => this.setState({ input: e.target.value })

	addTask = () => {
		this.props.onAddTask(this.state.input)

		this.setState({ input: '' })
	}

	render() {
		return <form onSubmit={e => {
				e.preventDefault()
				this.addTask()
				}
			}>
			<input type="text" className="round-blue-input" placeholder="Input task" onChange={this.keepInput} value={this.state.input} />
				&nbsp;
			<button type="submit" className="round-red-button">Add</button>
			</form>
		}
}




function PendingTaskList(props) {
	if(props.tasks.length > 0){
		return (<div><h3>Pending Tasks</h3><ul>
					{props.tasks.map((task, index) => <li>{task} &nbsp; <a onClick={(e) => {
						e.preventDefault()
						props.onRemoveTask(index)
					}}>🗑</a></li>)}
				</ul></div>
		)
	}
	return <div>Very good! You have no pending tasks.</div>
}




function CompletedTaskList(props){
	if(props.completedTasks.length > 0){
		return (<div><h3>Completed Tasks</h3><ul>
					{props.completedTasks.map((task) => <li>{task}</li>)}
				</ul></div>
		);
	}
	return ''
}


/* Renderizamos el componente global */
ReactDOM.render(<DoneTaskList />,
	document.getElementById('root'))

