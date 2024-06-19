"use client";

import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import InfoProductPage from "./shared/InfoProductPage";

interface DataTableProps<ProductType, TValue> {
	columns: ColumnDef<ProductType, TValue>[];
	data: ProductType[];
}

export function DataTable<ProductType, TValue>({
	columns,
	data,
}: DataTableProps<ProductType, TValue>) {
	const [IsOpen, setIsOpen] = useState(false);
	const [idOfProduct, setIdOfProduct] = useState("");
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className='rounded-md lg:w-full flex items-center justify-center mx-auto h-full px-2  w-[350px] sm:w-full md:w-full  border-white/10 border-t-0 '>
			<Table className='w-full h-full py-2 border-2 rounded-3xl'>
				<TableHeader>
					{table
						.getHeaderGroups()
						.map((headerGroup) => (
							<TableRow
								key={headerGroup.id}
								className='!border hover:!bg-transparent'>
								{headerGroup.headers.map(
									(header) => {
										return (
											<TableHead
												key={
													header.id
												}
												className='!border-white/30  hover:!bg-transparent cursor-pointer  py-2'>
												{header.isPlaceholder
													? null
													: flexRender(
															header
																.column
																.columnDef
																.header,
															header.getContext(),
													  )}
											</TableHead>
										);
									},
								)}
							</TableRow>
						))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows?.length ? (
						table
							.getRowModel()
							.rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={
										row.getIsSelected() &&
										"selected"
									}
									className='!border !py-1 cursor-pointer hover:bg-black/30'
									onClick={() => {
										setIsOpen(!IsOpen);
										const productId =
											row.original
												._id as string;
										setIdOfProduct(
											productId,
										);
									}}>
									{row
										.getVisibleCells()
										.map((cell) => (
											<TableCell
												key={
													cell.id
												}
												align='left'
												className='text-dark-2   border-white/20'>
												{flexRender(
													cell
														.column
														.columnDef
														.cell,
													cell.getContext(),
												)}
											</TableCell>
										))}
								</TableRow>
							))
					) : (
						<TableRow>
							<TableCell
								colSpan={columns.length}
								className='h-6 text-center text-dark-2'>
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>

			<InfoProductPage
				id={idOfProduct}
				IsOpen={IsOpen}
				setIsOpen={setIsOpen}
			/>
		</div>
	);
}
