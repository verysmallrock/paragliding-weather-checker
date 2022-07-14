import React, { Component } from 'react';
import S from './Stat.module.css'

export default class Stat extends Component {
	render() {
		return <React.Fragment>
			<span className={ S.name }>{ this.props.name }</span>
			<span className={ S.value }>{ this.props.value }</span>
		</React.Fragment>
	}
}