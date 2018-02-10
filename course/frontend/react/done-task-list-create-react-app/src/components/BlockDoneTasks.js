import React from 'react';

import TitleOfSection from './TitleOfSection';
import DoneTasksList from './DoneTasksList';

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

export default BlockDoneTasks;