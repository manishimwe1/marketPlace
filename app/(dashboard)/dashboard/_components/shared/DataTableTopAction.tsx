import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableCellsIcon } from "@heroicons/react/24/outline";
import {
	MoreVerticalIcon,
	LucideTable,
} from "lucide-react";

const DataTableTopAction = ({
	position,
}: {
	position: "left" | "right";
}) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				{position === "left" && (
					<div className=' items-center hidden lg:flex justify-center p-2 text-purple-200/80 ring-2 ring-purple-50/20 rounded-lg bg-black/50 '>
						<LucideTable className='h-4 w-4 lg:h-6 lg:w-6' />
					</div>
				)}
				{position === "right" && (
					<div className='flex items-center justify-center p-2 text-purple-200 ring-2 ring-purple-50/20 rounded-lg bg-black/50 '>
						<MoreVerticalIcon className='h-4 w-4 lg:h-6 lg:w-6' />
					</div>
				)}
			</DropdownMenuTrigger>
			<DropdownMenuContent className='bg-gradient text-purple-200 !border-white/20'>
				<DropdownMenuItem className='cursor-pointer hover:!bg-black/30'>
					Export CSV
				</DropdownMenuItem>
				<DropdownMenuItem className='cursor-pointer hover:!bg-black/30'>
					Export Json
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default DataTableTopAction;
