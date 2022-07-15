import React, { Component } from 'react';
import Stat from './Stat';

export default class WeewxFeed extends Component {
	constructor(props) {
		super(props)
		this.state = {
			feed: {}
		}
		this.fetchData()
	}

	decodeString(str) {
		var txt = document.createElement("textarea");
		txt.innerHTML = str;
		return txt.value;
	}

	decodeFeedData(json) {
		json.current.outTemp = this.decodeString(json.current.outTemp)
		json.current.winddir = this.decodeString(json.current.winddir)
	}

	async fetchData() {
		const json = await (await fetch(this.props.jsonUrl)).json()
		this.decodeFeedData(json)
		this.setState({ feed: json })
	}

	get feed() {
		return this.state.feed
	}

	get baseUrl() {
		return this.props.url
	}

	render() {
		return <div>
			<a href={ this.baseUrl } target='_blank' rel="noreferrer" ><h3>{ this.feed.site }</h3></a>
			{ this.props?.data?.subtitle && <h4>{ this.props?.data?.subtitle }</h4> }
			<Stat name='Current Temp' value={ this.feed.current?.outTemp } />
			<br />
			<Stat name='Wind' value={ this.feed.current?.windspeed } />
			<Stat name='Gust' value={ this.feed.current?.windGust } />
			<br />
			<Stat name='Wind Direction' value={ `${this.feed.current?.windcompass} (${this.feed.current?.winddir})`} />
			<br />
			<img style={{ width: '100%', 'max-width': '560px' }} alt='Wind daily forecast' src={ `${this.baseUrl}daywind.png`} />
			<img style={{ width: '100%', 'max-width': '560px' }} alt='Temp and dew point' src={ `${this.baseUrl}daytempdew.png`} />
		</div>
	}
}