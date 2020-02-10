import './Map.scss'
import {MAP_ACCESS_TOKEN, MAP_API_URL, MAP_ID, MAP_ZOOM} from '../../../../static/constants/constants'

export class Map {
    constructor() {
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



            function onLocationError(e) {
                alert(e.message);
            }

            this.map.on('locationfound', this.onLocationFound);
            this.map.on('locationerror', onLocationError);

            // wrap map.locate in a function
            this.locate = () => {
                this.map.locate({setView: true, maxZoom: 16});
            }

            // call locate every 3 seconds... forever
            this.locate();
        }
    }

    async awaitMap() {
        await this.component.appendChild(this.mapDiv)
    }

	onLocationFound(e) {
		// if position defined, then remove the existing position marker and accuracy circle from the map
		if (this.current_position) {
			this.removeLayer(this.current_accuracy);
			this.removeLayer(this.current_accuracy);
		}


		this.radius = e.accuracy / 2;

		if (this) {
			// L.marker(e.latlng).addTo(this)
		}
		this.current_position = L.marker(e.latlng).addTo(this)
			.bindPopup("You are within " + radius + " meters from this point").openPopup();

		this.current_accuracy = L.circle(e.latlng, radius).addTo(this);

	}

    innerHTML() {
        return this.component
    }

}
