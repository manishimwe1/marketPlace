import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBox = () => {
	return (
		<div className='flex w-full lg:w-[70%] justify-end p-2 border border-purple-300 rounded-md shadow-sm shadow-black/10'>
			<input
				placeholder='Seach Anything...'
				className='flex-1 bg-transparent font-bold focus:ring-0 focus:border-none focus-within:border-none focus:outline-none  focus-within:ring-0'
			/>
			<MagnifyingGlassIcon className='w-8 h-8 text-muted p-1' />
		</div>
	);
};

export default SearchBox;
