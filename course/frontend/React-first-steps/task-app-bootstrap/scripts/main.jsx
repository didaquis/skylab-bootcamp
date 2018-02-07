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


	render() {
		return (
			<div className="container">
				<div className="row">
					<BlockTasks 
						on_addNewTask={this.addNewTask} 
						tasksToDo={this.state.tasks} 
						/>
					<BlockDoneTasks tasksToDo={this.state.tasks} />
				</div>
			</div>
		);
	}
}

class Task {
	constructor(textOfTask){
		this.textOfTask = textOfTask;
		this.completedTask = false;
		this.id = new Date().getTime();
	}
}

class BlockTasks extends React.Component {
	constructor() {
		super();
	}


	render(){

		{
			/* Gracias a esto, puedo ejecutar JavaScript en este scope */
			//console.log(this.props);
		}

		return (
			<div className="col-md-6">
				<div className="todolist not-done">
					<TitleOfSection text={'Todos'} />
					<InputElement on_addNewTask={this.props.on_addNewTask} />
					<ButtonMarkAllAsCompleted />
					<hr />
					<ToDoTasksList tasksToDo={this.props.tasksToDo} />
					<ToDoTaskCounter tasksToDo={this.props.tasksToDo} />
				</div>
			</div>
		);
	}
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

class InputElement extends React.Component {
	constructor() {
		super();

		this.state = {
			inputNewTask: ''
		}
	}

	_handlerOnSubmit = (e) => {
		e.preventDefault();
		this.props.on_addNewTask(this.state.inputNewTask);
		this.setState({ inputNewTask: '' })
	}

	_handlerOnChange = (e) => {
		this.setState({ inputNewTask: e.target.value })
	}

	render (){
		return (
			<form onSubmit={this._handlerOnSubmit}>
				<input 
					type="text" 
					className="form-control add-todo" 
					placeholder="Add todo" 
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


function ButtonMarkAllAsCompleted(props) {
	return (
		<button id="checkAll" className="btn btn-success">Mark all as done</button>
	);
}

class ToDoTasksList extends React.Component {
	constructor() {
		super();
	}

	_handlerOnClick = (e) => {
		e.preventDefault();
		console.log(e.target.id);
		//task que han seleccionado = e.target.id

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
												onChange={this._handlerOnClick} 
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
	{
		var counter = 0;
		props.tasksToDo.map( (task) => {
			if(task.completedTask === false){
				counter++;
			}
		} );
	}

	return(
		<div className="todo-footer">
			<strong><span className="count-todos">{counter}</span></strong> Items Left
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

