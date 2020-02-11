import {Button} from "../../../molecules/Button/Button";
import Router from "../../../../routes/Router";

require('./Cart.scss')

export default class Cart {
    constructor({product}) {
        this.component = document.createElement('div')
        this.component.className = 'centered-form1'
        this.quantity = 1

        if (product) {
            this.product = document.createElement('div')
            this.product.className = 'center'
            this.spinner = document.createElement('div')
            this.spinner.className = 'spinner'

            this.add = document.createElement('div')
            this.add.addEventListener('click', () => this.addItem({product}))
            this.add.innerText = '+'
            this.add.className = 'add'

            this.subtract = document.createElement('div')
            this.subtract.addEventListener('click', () => this.removeItem({product}))
            this.subtract.innerText = '-'
            this.subtract.className = 'subtract'

            this.price = document.createElement('div')
            this.price.innerText = this.quantity
            this.price.className = 'quantity'

            this.spinner.appendChild(this.subtract)
            this.spinner.appendChild(this.price)
            this.spinner.appendChild(this.add)

            this.rightPanel = document.createElement('div')
            this.rightPanel.className = 'rightPanel'
            this.spinnerWrapper = document.createElement('div')

            this.priceText = document.createElement('div')
            this.priceText.innerText = 'Price'
            this.priceText.className = 'text'


            this.productText = document.createElement('div')
            this.productText.innerText = 'Product'
            this.productText.className = 'text'

            this.productDiv = document.createElement('div')
            this.productDiv.className = 'price'
            this.productDiv.innerText = product.name

            this.producerText = document.createElement('div')
            this.producerText.innerText = 'Producer'
            this.producerText.className = 'text'

            this.producer = document.createElement('div')
            this.producer.className = 'price'
            this.producer.innerText = product.producer

            this.totalPrice = document.createElement('div')
            this.totalPrice.className = 'price'
            this.totalPrice.innerText = product.price * this.quantity

            this.quantityText = document.createElement('div')
            this.quantityText.innerText = 'Quantity'
            this.quantityText.className = 'text'

            this.spinnerWrapper.appendChild(this.productText)
            this.spinnerWrapper.appendChild(this.productDiv)
            this.spinnerWrapper.appendChild(this.producerText)
            this.spinnerWrapper.appendChild(this.producer)

            this.spinnerWrapper.appendChild(this.priceText)

            this.spinnerWrapper.appendChild(this.totalPrice)

            this.spinnerWrapper.appendChild(this.quantityText)
            this.spinnerWrapper.className = 'spinnerWrapper'
            this.spinnerWrapper.appendChild(this.spinner)
            this.component.appendChild(this.product)
            this.submit = new Button( {
                innerText: 'Buy product', onClick: () => {
                    Router.go('company/create')
                }, type: 'button'
            })

            this.spinnerWrapper.appendChild(this.submit.innerHTML())
            this.rightPanel.appendChild(this.spinnerWrapper)

            this.component.appendChild(this.rightPanel)


        }
        return this
    }

    addItem({product}) {
        if (Number(product.stock) > this.quantity) {
            this.quantity += 1
            this.price.innerText = this.quantity
            this.totalPrice.innerText = product.price * this.quantity

        }
    }

    removeItem({product}) {
        if (this.quantity > 1) {
            this.quantity -= 1
            this.price.innerText = this.quantity
            this.totalPrice.innerText = product.price * this.quantity

        }
    }

}
