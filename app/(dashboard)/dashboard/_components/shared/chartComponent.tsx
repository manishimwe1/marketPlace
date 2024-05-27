"use client";

import { useEffect, useState } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	Rectangle,
} from "recharts";
import { getAllProductInStore } from "../../_actions/getData";

const data = [
	{
		name: "Page A",
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Page A",
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Page A",
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Page A",
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Page A",
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Page B",
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
];

export const ChartBar = ({ data }: { data: any[] }) => {
	if (!data) return null;

	const [item, setItem] = useState("");

	// useEffect(() => {
	// 	console.log(data[0].idx);

	// 	const getData = async () => {
	// 		await getAllProductInStore(data[0].idx);
	// 	};
	// }, [data]);

	console.log(item, "...>>>ITEMs");
	return (
		<ResponsiveContainer
			width='50%'
			height='60%'
			className='bg-black/40'>
			<BarChart
				width={100}
				height={300}
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
				className=''>
				<XAxis dataKey='name' />
				<YAxis dataKey={"i"} />

				<Bar
					dataKey='amt'
					fill='#ffff'
					activeBar={
						<Rectangle
							fill='pink'
							stroke='blue'
						/>
					}
				/>
			</BarChart>
		</ResponsiveContainer>
	);
};
