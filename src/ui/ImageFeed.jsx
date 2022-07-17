import React, { Component } from 'react'
import S from './ImageFeed.module.css'

export default class ImageFeed extends Component {
	constructor(props) {
		super(props)
		this.state = {
			'paddingBottom': '0%'
		}
	}

	componentDidMount() {
		const img = new Image()
		img.onload = () => { this.setImageSize(img.width, img.height) }
		img.src = this.props.src
	}

	setImageSize(width, height) {
		console.log(height, width)
		const padding = height / width * 100
		this.setState({ 'paddingBottom': `${padding.toFixed(2)}%`})
	}

	render() {
		return <div className={ S.root }>
			{ this.props?.title && <h4>{ this.props?.title }</h4> }
			<div className={ S.image }
				style={{ 'backgroundImage': `url(${this.props.src})`, 'paddingBottom': this.state['paddingBottom'] }}>
			</div>
		</div>
	}
}