/**
 *  Estructura de componentes:
 *
 * 		App
 * 			BlockTasks
 * 				TitleOfSection
 * 				InputSubmit
 * 				SuccessButton
 * 				ToDoTasksList
 * 				ToDoTaskCounter
 * 			BlockDoneTasks
 * 				TitleOfSection
 * 				DoneTasksList
 * 					RemoveOneTaskFromList
 * 
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
		// Marcamos la tarea seleccionada como completada
		this.setState(prevState => ({
			tasks: prevState.tasks.map(task => {
				if (task.id == taskToCheckAsCompleted){
					task.completedTask = true
				}
				return task
			})
		}))
	}

	markAllTaskAsCompleted = () => {
		// Marcamos todas las tareas no completadas como completadas
		this.setState(prevState => ({
			tasks: prevState.tasks.map(task => {
				if (task.completedTask === false){
					task.completedTask = true
				}
				return task
			})
		}))
	}

	removeOneTaskFromList = (taskToRemove) => {
		// Eliminamos la tarea
		this.setState(prevState => ({
			tasks: prevState.tasks.filter(task => {
				if (task.id != taskToRemove){
					return task
				}
			})
		}))
	}

	render() {

		{
			/* Gracias a estas llaves, puedo ejecutar JavaScript en este scope */
		}

		return (
			<div className="container">
				<div className="row">
					<BlockTasks 
						onAddNewTask={this.addNewTask} 
						onMarkAllTaskAsCompleted={this.markAllTaskAsCompleted}
						onMarkOneTaskAsCompleted={this.markOneTaskAsCompleted} 
						tasksToDo={this.state.tasks} 
						/>
					<BlockDoneTasks 
						onRemoveOneTaskFromList={this.removeOneTaskFromList} 
						tasksToDo={this.state.tasks} 
						/>
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
				<InputSubmit 
					onSubmit={props.onAddNewTask} 
					placeholder={'Add todo'} 
					/>
				<SuccessButton 
					label={'Mark all as done'} onPushButton={props.onMarkAllTaskAsCompleted} />
				<hr />
				<ToDoTasksList 
					onSelectOneItem={props.onMarkOneTaskAsCompleted} 
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
				<DoneTasksList tasksToDo={props.tasksToDo} onSelectedTaskForRemove={props.onRemoveOneTaskFromList}/>
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

	focusOnInputField = (input) => {
  		input.focus();
	}

	_handlerOnChange = (e) => {
		this.setState({ inputNewTask: e.target.value })
	}

	_handlerOnSubmit = (e) => {
		e.preventDefault();

		const valueOfInputTrimed = this.state.inputNewTask.trim();
		if(valueOfInputTrimed.length > 0){
			this.props.onSubmit( valueOfInputTrimed );
		}
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
					ref={this.focusOnInputField} 
				/>
			</form>
		);
	}
}


function SuccessButton(props) {
	return (
		<button id="checkAll" className="btn btn-success" onClick={props.onPushButton}>{props.label}</button>
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
			<strong><span className="count-todos">{props.tasksToDo.reduce((accum, task) => task.completedTask ? accum : ++accum, 0)}</span></strong> Items Left
		</div>
	);
}

function DoneTasksList(props){
	return(
		<ul id="done-items" class="list-unstyled">
			{
				props.tasksToDo.map( (task) => {
					if(task.completedTask){
						return (
							<li key={task.id} >{task.textOfTask} 
								<RemoveOneTaskFromList onClick={ () => { props.onSelectedTaskForRemove(task.id) } }/>
							</li>
						)
					}
				} )
			}
		</ul>
	);
}


function RemoveOneTaskFromList(props){
	return (
		<button onClick={ (e) => { e.preventDefault(); props.onClick() } } class="remove-item btn btn-default btn-xs pull-right">
			<span class="glyphicon glyphicon-remove"></span>
		</button>
	);
}


/* Renderizamos el componente global */
ReactDOM.render(<App />,
	document.getElementById('root'))

