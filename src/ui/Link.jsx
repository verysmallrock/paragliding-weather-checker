import React, { Component } from 'react';
import S from './Link.module.css'

export default class Link extends Component {
	render() {
		return <div className={ S.root }>
			🔗(external link)&nbsp;
			<a target='_blank' rel="noreferrer" href={ this.props.url }>{ this.props.label }</a>
		</div>
	}
}