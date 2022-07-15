import React, { Component } from 'react';
import S from './VideoFeed.module.css'

export default class VideoFeed extends Component {

	render() {
		return <div class={ S.root } >
			<iframe title={ `video-${this.props.url}` }
				src={ this.props.url }
				frameborder="0"
    			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
	}
}