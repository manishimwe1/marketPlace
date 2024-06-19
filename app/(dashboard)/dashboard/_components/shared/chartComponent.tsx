"use client";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	LineChart,
	Line,
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
	title,
}: {
	data: any[];
	title: string;
}) => {
	if (!data) return null;
	return (
		<div className='lg:w-1/2 w-full h-[200px] lg:h-[300px] lg:pb-10 overflow-hidden text-light-2  flex items-center flex-col justify-center rounded-3xl shadow-sm shadow-black'>
			<h1 className='font-semibold capitalize text-lg mt-10 !text-dark-2'>
				{title}
			</h1>
			{title === "Product" && (
				<ResponsiveContainer
					width='100%'
					height='100%'>
					<AreaChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 0,
							right: 30,
							left: 0,
							bottom: 0,
						}}>
						<CartesianGrid
							strokeDasharray='3 3'
							strokeOpacity={0.2}
						/>
						<XAxis dataKey='name' />
						<YAxis />
						<Tooltip />
						<Area
							type='monotone'
							dataKey='product'
							stroke='#8884d8'
							fill='#8884d8'
						/>
					</AreaChart>
				</ResponsiveContainer>
			)}

			{title === "Revenue income" && (
				<ResponsiveContainer
					width='100%'
					height='100%'>
					<LineChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 0,
							right: 30,
							left: 20,
							bottom: 5,
						}}>
						<CartesianGrid
							strokeDasharray='3 3'
							strokeOpacity={0.2}
						/>
						<XAxis dataKey='name' />
						<YAxis />
						<Tooltip />
						<Line
							type='monotone'
							dataKey='product'
							stroke='#8884d8'
							activeDot={{ r: 8 }}
						/>
						<Line
							type='monotone'
							dataKey='amt'
							stroke='#82ca9d'
						/>
					</LineChart>
				</ResponsiveContainer>
			)}
		</div>
	);
};
