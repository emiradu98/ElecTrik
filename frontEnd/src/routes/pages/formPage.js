import CompanyRepository from '../../repositories/CompanyRepository/CompanyRepository'
import Form from '../../components/organisms/Form'
import Router from '../Router'

import { fields } from '../../mock/fields.json'

export default (id) => {
	const form = new Form(fields, id, CompanyRepository, Router)
	return form.component
};
