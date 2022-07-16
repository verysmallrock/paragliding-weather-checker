import React, { Component } from 'react';
import S from './IframeEmbed.module.css'

export default class IframeEmbed extends Component {
	get data() {
		return this.props.data
	}

	get width() {
		return this.data.width ?? 800
	}

	get height() {
		return this.data.height ?? 600
	}

	render() {
		const { data } = this
		return <div 
			class={ S.root }
			style={{ width: `${this.width}px`, height: `${this.height}px` }}
		>
			<iframe key={ `entry${data.url}` } title={ data.url } className={ S.iframe } src={ data.url } width={ this.width } height={ this.height } />
		</div>
	}
}