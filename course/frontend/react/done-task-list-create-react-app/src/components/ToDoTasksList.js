import React from 'react';


function ToDoTasksList(props) {
	return (
		<ul id="sortable" className="list-unstyled">
			{
				props.tasksToDo.map( (task) => {
					if(task.completedTask === false){
						return (
							<li className="ui-state-default" key={task.id}>
								<div className="checkbox">
									<label>
										<input 
											type="checkbox" 
											defaultValue 
											id={task.id} 
											onChange={e => {
												const id = e.target.id
												setTimeout( () => props.onSelectOneItem(id), 250 )
											}} 
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

export default ToDoTasksList;