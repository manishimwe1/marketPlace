"use client";
import React, { PureComponent } from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		name: "Day 0",
		day: "Day 0",
		product: 0,
		order: 0,
		amt: 0,
	},
	{
		name: "Day 1",
		day: "Day 1",
		product: 1,
		order: 1,
		amt: 100,
	},

	{
		name: "Day 2",
		day: "Day 2",
		product: 5,
		order: 6,
		amt: 5000,
	},
	{
		name: "Day 4",
		day: "Day 4",
		product: 3,
		order: 0,
		amt: 6000,
	},
];

export const ChartBar = ({
	data: item,
}: {
	data: any[];
}) => {
	if (!data) return null;

	// const [item, setItem] = useState("");

	// useEffect(() => {
	// 	console.log(data[0].idx);

	// 	const getData = async () => {
	// 		await getAllProductInStore(data[0].idx);
	// 	};
	// }, [data]);

	// console.log(item, "...>>>ITEMs");
	return (
		<div className='lg:w-1/2 w-full h-full bg-gray-950/20 flex items-center justify-center rounded-3xl shadow-sm shadow-black'>
			<ResponsiveContainer
				height={"100%"}
				width={"100%"}>
				<LineChart
					width={500}
					height={300}
					data={data}
					margin={{
						right: 10,
						left: 10,
					}}>
					{/* <CartesianGrid strokeDasharray='3 3' /> */}
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line
						type='monotone'
						dataKey='order'
						stroke='#8884d8'
					/>
					<Line
						type='monotone'
						dataKey='product'
						stroke='#82ca9d'
					/>
					<Line
						type='monotone'
						dataKey='amt'
						stroke='#615EFC'
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};
