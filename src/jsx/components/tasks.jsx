import Task from "./task";

function Tasks({ data, setData }) {
	const addTask = (e) => {
		e.preventDefault();

		let titleInput = e.target.elements.title;
		let title = titleInput.value;
		let newTasksArray = data.tasks || [];
		let newID = -1;

		if (title === "") return;

		data.tasks?.forEach((task) => {
			if (task.ID > newID) {
				newID = task.ID;
			}
		});

		newID++;

		newTasksArray.push({ ID: newID, title: title });
		titleInput.value = "";

		setData({ ...data, tasks: newTasksArray, currentTaskID: newID });
	};

	data?.tasks
		?.sort((prev, next) => prev.title.localeCompare(next.title))
		.reverse();

	return (
		<div className="tasks">
			<form onSubmit={addTask} className="tasks__form jcfs-aic wrap">
				<input type="text" name="title" placeholder="Type here" />

				<button>Add task</button>
			</form>

			{data.tasks?.map((task, index) => {
				return (
					<Task
						taskData={task}
						data={data}
						setData={setData}
						key={index}
					/>
				);
			})}
		</div>
	);
}

export default Tasks;
