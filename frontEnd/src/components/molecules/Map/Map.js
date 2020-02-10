import './Map.scss'
import { MAP_ACCESS_TOKEN, MAP_API_URL, MAP_ID, MAP_ZOOM } from '../../../../static/constants/constants'

export class Map {
	constructor () {
		this.options = [51.505, -0.09]
		this.component = document.createElement('div')
		this.mapDiv = document.createElement('div')
		this.mapDiv.id = 'map'
		navigator.permissions.query({ name: 'geolocation' })
		this.awaitMap().then(() => {
			this._init()
		})

		return this
	}

	_init () {
		if (document.getElementById('map')) {

			let map = L.map('map').setView(this.options, 13)

			L.tileLayer(MAP_API_URL, {
				maxZoom: MAP_ZOOM,
				id: MAP_ID,
				accessToken: MAP_ACCESS_TOKEN
			}).addTo(map)
		}
	}

	async awaitMap () {
		await this.component.appendChild(this.mapDiv)
	}

	innerHTML () {
		return this.component
	}

}
