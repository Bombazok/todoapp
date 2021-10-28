import Task from "./task";

function Tasks({ data, setData }) {
	const addTask = (e) => {
		e.preventDefault();

		let titleInput = e.target.elements.title;
		let title = titleInput.value;
		let newTasksArray = data.tasks || [];
		let newID = -1;

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

	return (
		<div className="tasks">
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

			<form onSubmit={addTask}>
				<input type="text" name="title" placeholder="Type here" />

				<button>Add task</button>
			</form>
		</div>
	);
}

export default Tasks;
