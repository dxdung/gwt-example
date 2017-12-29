import React, {Component, PropTypes} from 'react';

export default class Image extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      // callback function exposed by GWT
        window.MyApp.action((x) => x + 3);
    }
    render() {
        return (
            <div onClick={this.handleClick}><p>
              Click me!!!
            </p></div>
        );
    }
}
