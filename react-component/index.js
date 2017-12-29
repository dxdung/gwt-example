import React from 'react';
import Image from './src/components/Image';

//export  { Image};

function renderComponent(containerId) { 
	ReactDOM.render( <Image />, document.getElementById(containerId)); 
}

module.exports = renderComponent;
window.renderComponent= renderComponent;