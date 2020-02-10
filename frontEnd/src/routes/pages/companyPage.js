import Company from '../../components/organisms/Company/Company'

export default (link, props) => {
	const company = new Company(props)
	return company.component
};
