import Company from '../../components/organisms/Company/Company'
import Deposit from '../../components/organisms/Deposit'

export default (link, props) => {
	const deposit = new Deposit(props)
	return deposit.component
};
