import { useEffect, useState } from "react";

import Tasks from "../components/tasks";
import Info from "../components/info";

function Home() {
	const [currentTask, setCurrentTask] = useState(null);
	const [data, setData] = useState(null);

	useEffect(() => {
		// we should use fetch here in case of server hold our data
		let storageData = window.localStorage.getItem("data");

		if (storageData) {
			setData(storageData);
			setCurrentTask(JSON.parse(storageData).currentTask);
		}
	}, []);

	return (
		<div className="home jcsb-aic wh-full">
			<Tasks />

			<Info />
		</div>
	);
}

export default Home;
