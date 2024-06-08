import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBox = () => {
	return (
		<div className='flex w-full lg:w-[70%] justify-end items-center px-2 p-1 border rounded-3xl border-purple-300 shadow-sm shadow-black/10 gap-4'>
			<MagnifyingGlassIcon className='w-4 lg:w-8 h-4 lg:h-8 text-muted' />
			<input
				placeholder='Seach Anything...'
				className='flex-1 bg-transparent text-purple-200 font-normal placeholder:text-sm placeholder:lg:text-base focus:ring-0 focus:border-none focus-within:border-none focus:outline-none  focus-within:ring-0'
			/>
		</div>
	);
};

export default SearchBox;
