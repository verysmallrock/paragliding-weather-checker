import React, { Component } from 'react';

export default class VideoFeed extends Component {

	render() {
		return <div>
			<iframe title={ `video-${this.props.url}` } width={ this.props.width ?? 853 } height={ this.props.height ?? 480 } src={ this.props.url }
    			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
		</div>
	}
}