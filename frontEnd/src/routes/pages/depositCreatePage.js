import Company from '../../components/organisms/Company/Company'
import Create from "../../components/organisms/Deposit";

export default (link, props) => {
	const deposit = new Create(props)
	return deposit.component
};
