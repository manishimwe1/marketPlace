export default function ShimmerButton({
	title,
}: {
	title: string;
}) {
	return (
		<button className='inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-primary px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
			{title}
		</button>
	);
}

// tailwind.config.js code
