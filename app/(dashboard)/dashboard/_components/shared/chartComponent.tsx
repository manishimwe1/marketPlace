"use client";
import { IStore } from "@/lib/database/models/store.model";
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

const data = [
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

export const ChartBar = ({
	data: store,
}: {
	data: IStore[];
}) => {
	console.log(data);

	return (
		<ResponsiveContainer
			width='50%'
			height='60%'
			className='border bg-black/40'>
			<BarChart
				width={500}
				height={300}
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='name' />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar
					dataKey='pv'
					fill='#8884d8'
					activeBar={
						<Rectangle
							fill='pink'
							stroke='blue'
						/>
					}
				/>
				<Bar
					dataKey='uv'
					fill='#82ca9d'
					activeBar={
						<Rectangle
							fill='gold'
							stroke='purple'
						/>
					}
				/>
			</BarChart>
		</ResponsiveContainer>
	);
};
