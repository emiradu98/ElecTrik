import CompanySingle from '../../components/organisms/Company/Single/CompanySingle'

export default (link,props) => {
	const {id} = props
	const company = new CompanySingle({ id })
	return company.component
};
