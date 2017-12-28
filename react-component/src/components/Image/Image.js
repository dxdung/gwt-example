import React, {Component, PropTypes} from 'react';

export default class Image extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      // call api exposed from GWT
        window.MyApp.sayHello("Hello Dzung!!!!!!!!!!!!!!!!!!!!!");
    }
    render() {
        return (
            <div onClick={this.handleClick}><p>
              Click me!!!
            </p></div>
        );
    }
}
