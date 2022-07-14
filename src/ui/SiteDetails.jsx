import React from 'react'
import S from './SiteDetails.module.css'
import VideoFeed from './VideoFeed'
import WeatherGovForecast from './WeatherGovForecast'
import WeewxFeed from './WeewxFeed'
import WindyEmbed from './WindyEmbed'
import Locations, { ENTRY_TYPES, LOCATION_DATA } from '../model/Locations'

export default class SiteDetails extends React.Component {

	constructor(props) {
		super(props)
		this.locationSelector = React.createRef()
		this.handleLocationChange = this.handleLocationChange.bind(this)
		this.state = {
			location: Locations.current
		}
	}

	get location() {
		return this.state.location
	}

	handleLocationChange(e) {
		const newLocation = this.locationSelector.current.value
		Locations.setLocation(newLocation)
		this.setState({ location: Locations.current })
	}

	renderLocationOptions() {
		const options = []
		return Object.keys(LOCATION_DATA).map((location) => <option key={ location } value={ location }>{ LOCATION_DATA[location].name }</option>)
	}

	renderTitle() {
		return <div className={ S.title }>
			<h1>
				<span>Site details for</span>
				<select className={ S.siteSelect }
					ref={ this.locationSelector } 
					value={ Locations.selectedLocation } 
					onChange={ this.handleLocationChange }
				>
					{this.renderLocationOptions() }
				</select>
			</h1>
		</div>
	}
	
	renderVideo(data, index) {
		return <VideoFeed key={ `entry${index}` } url={ data.url } width={ data.width } height={ data.height } />
	}

	renderIframe(data, index) {
		return <iframe key={ `entry${index}` } title={ data.url } className={ S.iframe } src={ data.url } width={ data.width } height={ data.height } />
	}

	renderWeewxFeed(data, index) {
		return <WeewxFeed key={ `entry${index}` } data={ data } url={ data.url } jsonUrl={ data.jsonUrl } />
	}

	renderWeatherGovEntry(data, index) {
		const location = {
			latitude: data.latitude || this.location?.latitude,
			longitude: data.longitude || this.location?.longitude,
		}
		return <WeatherGovForecast key={ `entry${index}` } title={ data.title } location={ location } />
	}

	renderEntries() {
		const renderMap = {
			[ENTRY_TYPES.IFRAME]: this.renderIframe.bind(this),
			[ENTRY_TYPES.WATHER_GOV_FORECAST]: this.renderWeatherGovEntry.bind(this),
			[ENTRY_TYPES.WEEWX]: this.renderWeewxFeed.bind(this),
			[ENTRY_TYPES.YOUTUBE]: this.renderVideo.bind(this),
		}

		return this.location.entries?.map((data, index) => renderMap[data.type](data, index))
	}

	render() {
		if (!this.location)
			return

		return <div className={ S.root }>
			{ this.renderTitle() }
			<WindyEmbed location={ this.location } />
			{ this.renderEntries() }
		</div>
	}
}