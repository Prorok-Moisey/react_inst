import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
<div className="footer main_size">

		<div className="links">
			<a className="common_link" target="_blank" href="https://www.instagram.com/about/us/">ABOUT AS</a>
			<a className="common_link" target="_blank" href="https://help.instagram.com">SUPPORT</a>
			<a className="common_link" target="_blank" href="https://instagram-press.com">PRESS</a>
			<a className="common_link" target="_blank" href="https://www.instagram.com/developer/">API</a>
			<a className="common_link" target="_blank" href="https://www.instagram.com/about/jobs/">JOBS</a>
			<a className="common_link" target="_blank" href="https://www.instagram.com/legal/privacy/">PRIVACY</a>
			<a className="common_link" target="_blank" href="https://www.instagram.com/legal/terms/">TERMS</a>
			<a className="common_link" target="_blank" href="https://www.instagram.com/explore/locations/">DIRECTOTY</a>
			<a className="common_link" target="_blank" href="https://www.instagram.com/directory/suggested/natgeotravel">SUGGESTED PROFILES</a>
			<a className="common_link" target="_blank" href="https://www.instagram.com/directory/hashtags/">HASHTAGS</a>
			<a className="common_link" target="_blank">LANGUAGE</a>
		</div>

		<p className="footer__string">&copy;2018 INSTAGRAM</p>
	</div>

    );
  }
}

export default Footer;