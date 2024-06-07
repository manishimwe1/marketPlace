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

	console.log(data, ">>>>>>>>>");

	return (
		<div className='rounded-md w-full h-full  border border-white/10 border-t-0 '>
			<Table>
				<TableHeader>
					{table
						.getHeaderGroups()
						.map((headerGroup) => (
							<TableRow
								key={headerGroup.id}
								className='!border-white/0 !py-0 hover:!bg-transparent'>
								{headerGroup.headers.map(
									(header) => {
										return (
											<TableHead
												key={
													header.id
												}
												className='!border-white/30  hover:!bg-transparent cursor-pointer'>
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
									className='!border-white/10 !h-6 cursor-pointer hover:bg-black/30'
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
												className='text-purple-100   border-white/20 !h-6'>
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
								className='h-6 text-center text-purple-300'>
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
