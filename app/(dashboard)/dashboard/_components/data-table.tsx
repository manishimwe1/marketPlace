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

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}

export function DataTable<TData, TValue>({
	columns,
	data,
}: DataTableProps<TData, TValue>) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className='rounded-md w-full h-full px-4 py-4 border border-white/10 '>
			<Table>
				<TableHeader>
					{table
						.getHeaderGroups()
						.map((headerGroup) => (
							<TableRow
								key={headerGroup.id}
								className='!border-white/30 !py-0'>
								{headerGroup.headers.map(
									(header) => {
										return (
											<TableHead
												key={
													header.id
												}
												className='!border-white/30 hover:!bg-none'>
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
									className='!border-white/10 !h-10'>
									{row
										.getVisibleCells()
										.map((cell) => (
											<TableCell
												key={
													cell.id
												}
												className='text-white  border-white/20 !h-10'>
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
								className='h-12 text-center'>
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	);
}
