import React, { Component } from 'react';

export default class WeatherGovForecast extends Component {
	get href() {
		return `http://forecast.weather.gov/MapClick.php?lat=${this.props.location?.latitude}&lon=${this.props.location?.longitude}`
	}

	get imageHref() {
		return `http://forecast.weather.gov/meteograms/Plotter.php?lat=${this.props.location?.latitude}&lon=${this.props.location?.longitude}&wfo=MTR&zcode=CAZ509&gset=18&gdiff=3&unit=0&tinfo=PY8&ahour=0&pcmd=1000100000000000000000000000000000000000000000000000000000&lg=en&indu=1!1!1&dd=0&bw=0&hrspan=48&pqpfhr=6&psnwhr=6`
	}

	render() {
		return <React.Fragment>
			<h3>{ this.props.title }</h3>
			<a href={ this.href }>
				<img alt='weather.gov forecast' src={ this.imageHref } />
			</a>
		</React.Fragment>
	}
}