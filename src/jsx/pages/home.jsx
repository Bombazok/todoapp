import { useEffect, useState } from "react";

import Tasks from "../components/tasks";
import Info from "../components/info";

function Home() {
	const [data, setData] = useState({ tasks: [] });

	const storage = window.localStorage;

	useEffect(() => {
		// we should use fetch here in case of server hold our data
		let storageData = storage.getItem("data");

		if (storageData) {
			let parsedData = JSON.parse(storageData);

			setData(parsedData);
		}
	}, [storage]);

	const dataHolder = (newData) => {
		storage.setItem("data", JSON.stringify(newData));

		setData(newData);
	};

	return (
		<div className="home jcsb-aic wh-full">
			<Tasks data={data} setData={dataHolder} />

			<Info data={data} setData={dataHolder} />
		</div>
	);
}

export default Home;
