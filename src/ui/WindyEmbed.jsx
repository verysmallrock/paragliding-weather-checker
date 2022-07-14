import React, { Component } from 'react';

export default class WindyEmbed extends Component {
	get embedUrl() {
		const { latitude:lat, longitude:long, windyMapZoom:zoom } = this.props?.location
		return `https://embed.windy.com/embed2.html?lat=${lat}&lon=${long}&detailLat=${lat}&detailLon=${long}&width=650&height=450&zoom=${zoom}&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=default&metricTemp=default&radarRange=-1`
	}

	render() {
		return <iframe 
			width='650' 
			height='450'
			src={ this.embedUrl } 
		/>
	}
}