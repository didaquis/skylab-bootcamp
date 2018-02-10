import React from 'react';

import './App.css';

import Task from './model/Task';

import BlockDoneTasks from './components/BlockDoneTasks';
import BlockTasks from './components/BlockTasks';


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

export default App;
