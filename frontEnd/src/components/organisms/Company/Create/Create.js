import {sha256} from "js-sha256";
import {login} from "../../../../repositories/AuthRepository/AuthActions";
import Form from "../../../molecules/Form/Form";

require('./Create.scss');



export default class Create {
  constructor () {
    this.companyForm = new Form({
          inputArray: [
            {
              name: 'company_name',
              labelName: 'Company Name',
              id: 'company_name',
              required: true,

              placeholder: 'Type company name',
              type: 'text',
              onChange: () => {
              }
            },
            {
              name: 'password',
              labelName: 'Password',
              id: 'password',
              required: true,

              placeholder: 'Type your password',
              type: 'password',
              onChange: () => {
              }
            },
          ],
          formTitle: 'Create',
          onSubmit: ()=>login({email: this.companyForm.getValues().email, password: sha256(this.companyForm.getValues().password)})
          ,
          btn: {
            type: 'button',
            innerText: 'Create'

          }
        }
    )
    this.component = document.createElement('div');
    this.component.className = 'centered-form'
    this.component.appendChild(this.companyForm.innerHTML());
    this.initiateMap()
    return this;
  }
    async initiateMap() {
        let mapDiv = document.createElement('div')
        mapDiv.id = 'map'

        await this.component.appendChild(mapDiv)

        if (document.getElementById('map')) {
            let mymap =  L.map('map', {doubleClickZoom: false}).locate({setView: true, maxZoom: 16});
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                accessToken: 'pk.eyJ1IjoiZW1pbGlhbnJhZHV1IiwiYSI6ImNqd3FtcHRodDFjcHIzem9kd3VrNWk0cmwifQ.MWKQQMY1NcNoh2k-u_OMqA'
            }).addTo(mymap);
        }
    }


}
