import Router from '../../../routes/Router';
import {Button} from "../../molecules/Button/Button";
import {getCompanies} from "../../../repositories/CompanyRepository/CompanyActions";
import CompanyRepository from "../../../repositories/CompanyRepository";

require('./Company.scss');

export default class Company {
    constructor() {
        this.component = document.createElement('div');
        this.component.classList.add('list__page');
        this._init(this.component)
        this.companyRepository = CompanyRepository;
        this.companies = this.companyRepository.getState().companies
        const button = new Button(
            {
                innerText: 'Create company', onClick: () => {
                    Router.go('company/create')
                }, type: 'button'
            }
        );


        this.component.appendChild(button.innerHTML())
        return this;

    }

    async _init(comp) {
        await this.componentDidMount(comp);

    }

    handleEdit(id) {
        Router.go('form', {id});
    }

    handleDelete(id, rowElement) {
        this.PersonRepository.delete(id);
        this.list.removeChild(rowElement);
    }

    async componentDidMount(comp) {
        await getCompanies();
        this.list = []
        if (this.companies) {
            this.companies.forEach(company => {
                let text = document.createElement('div')
                text.innerHTML = '12345'
                this.list.push(text)
            })
        }
        this.list.forEach(item => {
                comp.appendChild(item)
            }
        )

    }
}
