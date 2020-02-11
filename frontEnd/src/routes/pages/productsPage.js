import Company from '../../components/organisms/Company/Company'
import Create from "../../components/organisms/Deposit";
import Products from "../../components/organisms/Products";

export default (link, props) => {
	const products = new Products(props)
	return products.component
};
