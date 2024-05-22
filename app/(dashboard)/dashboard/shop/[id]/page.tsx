import { getStoreById } from "../../_actions/getData";

type Props = {
	params: { id: string };
};
const storePage = async ({ params: { id } }: Props) => {
	const store = await getStoreById(id);

	return (
		<div className='h-full py-20 items-center justify-center'>
			storePage
		</div>
	);
};

export default storePage;
