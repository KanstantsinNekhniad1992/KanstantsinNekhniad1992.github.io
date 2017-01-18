'use strict';
import React from 'react';
import {render} from 'react-dom';
import '../../styles/style.scss';
import Header from './header/Header';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
			<div className="wrapper">
				<Header/>
				<div className="content">
					{this.props.children}
				</div>
			</div>
        );
    }

}

export default App;
