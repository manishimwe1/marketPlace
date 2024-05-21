import { getStoreById } from "../../_actions/getData";

type Props = {
	params: { id: string };
};
const storePage = async ({ params: { id } }: Props) => {
	const store = await getStoreById(id);

	console.log("STORE", store);

	return <div>storePage</div>;
};

export default storePage;
