import './Map.scss'
import {MAP_ACCESS_TOKEN, MAP_API_URL, MAP_ID, MAP_ZOOM} from '../../../../static/constants/constants'
import _ from 'lodash'

export class Map {
    constructor({click = false, markers = []}) {
        this.markers = markers
        if (click) {
            this.marker = L.marker()
            this.click = click
        }
        this.options = [51.505, -0.09];
        this.current_position = undefined;
        this.current_accuracy = undefined;

        this.component = document.createElement('div');
        this.mapDiv = document.createElement('div');
        this.mapDiv.id = 'map';
        navigator.permissions.query({name: 'geolocation'});
        this.awaitMap().then(() => {
            this._init()
        });


        return this;
    }

    async _init() {
        if (document.getElementById('map')) {

            this.map = L.map('map').setView(this.options, 13)


            L.tileLayer(MAP_API_URL, {
                maxZoom: MAP_ZOOM,
                id: MAP_ID,
                accessToken: MAP_ACCESS_TOKEN
            }).addTo(this.map);
            if (this.click) {
                this.map.on('click', (e) => {
                    this.map.removeLayer(this.marker);
                    this.marker = L.marker(e.latlng).addTo(this.map)
                })
            }

            function onLocationError(e) {
                console.log(e.message);
            }

            this.map.on('locationfound', this.onLocationFound);
            this.map.on('locationerror', onLocationError);

            this.locate = () => {
                this.map.locate({setView: true, maxZoom: 16});
            }

            this.locate();
            if (!_.isEmpty(this.markers)) {
                this.markers.forEach((mrk) => {
                    const latlng = L.latLng(mrk.lat, mrk.lng)
                    L.marker(latlng).addTo(this.map).bindPopup(mrk.company_name)
                })
            }
        }
    }

    async awaitMap() {
        await this.component.appendChild(this.mapDiv)
    }

    onLocationFound(e) {
        // this.current_position = L.marker(e.latlng).addTo(this)
        //     .bindPopup("You are here ").openPopup();
    }


    getLocation() {
        return this.marker._latlng
    }

    innerHTML() {
        return this.component
    }

}
