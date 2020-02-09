import CompanyRepository from '../../repositories/CompanyRepository/CompanyRepository';
import Company from '../../components/organisms/Company/Company';
import {persons} from '../../mock/companies.json';

export default () => {
    const company = new Company(persons, CompanyRepository);
    return company.component;
};
