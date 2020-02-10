import './CompanyLink.scss'

export class CompanyLink {
    constructor({name, link, email, id, onClick, onRemove}) {
        this.div = document.createElement('div')
        this.div.className = 'companyLink'

        this.delete = document.createElement('div')
        this.delete.className = 'companyDelete'
        this.delete.addEventListener('click', onRemove)
        this.delete.innerText = 'ⓧ'

        this.div.appendChild(this.delete)
        this.name = document.createElement('p')
        this.name.className = 'companyName'
        this.name.innerText = name
        if (name) {
            this.div.appendChild(this.name)
        }
        this.email = document.createElement('p')
        this.email.className = 'companyEmail'
        this.email.innerText = email
        if (email) {
            this.div.appendChild(this.email)
        }
        this.div.addEventListener('click', onClick)
        return this
    }

    innerHTML() {
        return this.div
    }

    getValue() {
        return this.input.value
    }
}
