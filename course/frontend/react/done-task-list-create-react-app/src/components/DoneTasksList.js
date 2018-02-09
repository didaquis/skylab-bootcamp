import React from 'react';

import RemoveOneTaskFromList from './RemoveOneTaskFromList';

function DoneTasksList(props){
	return(
		<ul id="done-items" className="list-unstyled">
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

export default DoneTasksList;