import Create from "../../components/organisms/Products/Create";

export default (link, props) => {
	const create = new Create(props)
	return create.component
};
