import React, { Component } from 'react';
import S from './IframeEmbed.module.css'

export default class IframeEmbed extends Component {
	get data() {
		return this.props.data
	}
	render() {
		const { data } = this
		return <div 
			class={ S.root }
			style={{ width: '800px', height: '600px' }}
		>
			<iframe key={ `entry${data.url}` } title={ data.url } className={ S.iframe } src={ data.url } width={ data.width } height={ data.height } />
		</div>
	}
}