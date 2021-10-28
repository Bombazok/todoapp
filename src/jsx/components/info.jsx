function Info({ data, setData }) {
	let notEmpty = data.currentTaskID >= 0;
	let currentTask = null;

	data.tasks?.forEach((task) => {
		if (task.ID === data.currentTaskID) {
			currentTask = task;
		}
	});

	return (
		<div className={`info ${notEmpty ? "" : "info__empty"}`}>
			{currentTask ? (
				<div className="info__holder">
					<div className="info__title">{currentTask.title}</div>
				</div>
			) : null}
		</div>
	);
}

export default Info;
