/**
 *  Estructura de componentes:
 *
 * 		App
 * 			BlockTasks
 * 				TitleOfSection
 * 				InputElement
 * 				ButtonMarkAllAsCompleted
 * 				ToDoTasksList
 * 				ToDoTaskCounter
 * 			BlockDoneTasks
 * 				TitleOfSection
 * 				DoneTasksList
 */

'use strict';

class Task {
	constructor(textOfTask){
		this.textOfTask = textOfTask;
		this.completedTask = false;
		this.id = new Date().getTime();
	}
}


class App extends React.Component {
	constructor() {
		super();

		this.state = {
			tasks: []
		}
	}


	addNewTask = (textForNewTask) => {
		const newTask = new Task( textForNewTask );

		this.setState(prevState => {
			return {
				tasks: prevState.tasks.concat( newTask )
			}
		})
	}

	markOneTaskAsCompleted = (taskToCheckAsCompleted) => {
		console.log(taskToCheckAsCompleted);
	}


	render() {

		{
			/* Gracias a esto, puedo ejecutar JavaScript en este scope */
			//console.log(this.props);
		}

		return (
			<div className="container">
				<div className="row">
					<BlockTasks 
						onAddNewTask={this.addNewTask} 
						tasksToDo={this.state.tasks} 
						onSelectOneItem={this.markOneTaskAsCompleted} 
						/>
					<BlockDoneTasks tasksToDo={this.state.tasks} />
				</div>
			</div>
		);
	}
}


function BlockTasks(props){
	return (
		<div className="col-md-6">
			<div className="todolist not-done">
				<TitleOfSection text={'Todos'} />
				<InputSubmit onSubmit={props.onAddNewTask} placeholder={'Add todo'} />
				<SuccessButton label={'Mark all as done'} />
				<hr />
				<ToDoTasksList 
					onSelectOneItem={props.onSelectOneItem} 
					tasksToDo={props.tasksToDo} 
					/>
				<ToDoTaskCounter tasksToDo={props.tasksToDo} />
			</div>
		</div>
	);
}


function BlockDoneTasks(props){
	return (
		<div className="col-md-6">
			<div className="todolist">
				<TitleOfSection text={'Already Done'} />
				<DoneTasksList />
			</div>
		</div>
	);
}

function TitleOfSection(props){
	return <h1>{props.text}</h1>;
}

class InputSubmit extends React.Component {
	constructor() {
		super();

		this.state = { inputNewTask: '' }
	}

	_handlerOnChange = (e) => {
		this.setState({ inputNewTask: e.target.value })
	}

	_handlerOnSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.inputNewTask);
		this.setState({ inputNewTask: '' })
	}


	render (){
		return (
			<form onSubmit={this._handlerOnSubmit}>
				<input 
					type="text" 
					className="form-control add-todo" 
					placeholder={this.props.placeholder} 
					name="inputNewTask" 
					required 
					autofocus 
					onChange={this._handlerOnChange} 
					value={this.state.inputNewTask} 
				/>
			</form>
		);
	}
}


function SuccessButton(props) {
	return (
		<button id="checkAll" className="btn btn-success">{props.label}</button>
	);
}

class ToDoTasksList extends React.Component {
	constructor() {
		super();
	}

	_handlerOnClick = (e) => {
		e.preventDefault();

		//task que han seleccionado = e.target.id
		const itemSelected= (e.target.id);
		this.props.onSelectOneItem(itemSelected)
	}

	render(){
		{
			//console.table(this.props.tasksToDo);
		}

		return (
			<ul id="sortable" className="list-unstyled">
				{
					this.props.tasksToDo.map( (task) => {
						if(task.completedTask === false){
							return (
								<li className="ui-state-default">
									<div className="checkbox">
										<label>
											<input 
												type="checkbox" 
												defaultValue 
												id={task.id} 
												onClick={this._handlerOnClick} 
												/>{task.textOfTask}
										</label>
									</div>
								</li>
							);
						}
					} )
				}
		  </ul>
		);
	}
}

function ToDoTaskCounter(props){
	return(
		<div className="todo-footer">
			<strong><span className="count-todos">{props.tasksToDo.reduce((accum, task) => task.done ? accum : ++accum, 0)}</span></strong> Items Left
		</div>
	);
}

function DoneTasksList(props){
	return(
		<ul id="done-items" class="list-unstyled">
			<li>Some item <button class="remove-item btn btn-default btn-xs pull-right"><span class="glyphicon glyphicon-remove"></span></button></li>
		</ul>
	);
}


/* Renderizamos el componente global */
ReactDOM.render(<App />,
	document.getElementById('root'))

