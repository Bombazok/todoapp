function Task({ taskData, data, setData }) {
	const clickHandle = () => {
		setData({ ...data, currentTaskID: taskData.ID });
	};

	return (
		<div className="task" onClick={clickHandle}>
			<p>{taskData.title}</p>
		</div>
	);
}

export default Task;
