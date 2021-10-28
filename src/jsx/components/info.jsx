import { useEffect, useState } from "react";

function Info({ data, setData }) {
	let notEmpty = data.currentTaskID >= 0;
	let currentTask = null;

	data.tasks?.forEach((task) => {
		if (task.ID === data.currentTaskID) {
			currentTask = task;
		}
	});

	const [currentTitle, setCurrentTitle] = useState("");

	// using it to dispkay current title at the Info input
	useEffect(() => {
		if (currentTask) setCurrentTitle(currentTask?.title);
	}, [currentTask]);

	const editTask = (e) => {
		e.preventDefault();

		let titleInput = e.target.elements.title;
		let newTitle = titleInput.value;
		let newTasksArray = data.tasks.map((task) =>
			task.ID !== currentTask.ID ? task : { ...task, title: newTitle }
		);

		if (newTitle === "") return;

		setData({ ...data, tasks: newTasksArray });
	};

	const completeTask = () => {
		let newTasksArray = data.tasks.map((task) =>
			task.ID !== currentTask.ID ? task : { ...task, completed: true }
		);

		setData({ ...data, tasks: newTasksArray });
	};

	const removeTask = () => {
		let newTasksArray = [];
		let newTaskID = -1;

		data.tasks.forEach((task) => {
			if (task.ID !== currentTask.ID) {
				newTaskID = task.ID;

				newTasksArray.push(task);
			}
		});

		setData({ ...data, tasks: newTasksArray, currentTaskID: newTaskID });
	};

	return (
		<div className={`info ${notEmpty ? "" : "info__empty"}`}>
			{currentTask ? (
				<div className="info__holder">
					<form
						onSubmit={editTask}
						className="info__form jcfs-aic wrap"
					>
						<input
							className="info__title"
							name="title"
							value={currentTitle}
							onChange={(e) => setCurrentTitle(e.target.value)}
						/>

						<button type="submit">Save</button>

						<button
							type="button"
							onClick={completeTask}
							className="button__complete"
						>
							Complete
						</button>

						<button
							type="button"
							onClick={removeTask}
							className="button__remove"
						>
							Remove
						</button>
					</form>
				</div>
			) : null}
		</div>
	);
}

export default Info;
