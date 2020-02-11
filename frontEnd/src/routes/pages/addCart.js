import Cart from "../../components/organisms/Shop/Cart/Cart";

export default (link,props) => {
	const cart = new Cart(props)
	return cart.component
};
