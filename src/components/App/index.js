import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import { setItems } from '../../redux/actions/todo';
import List from '../List';
import FormAdd from '../Form/Add';
import FormEdit from '../Form/Edit';

import './index.scss';

class App extends Component {

	constructor (props) {
	    super(props);
	    this.state = {
	      animationClass: 'app'
	    }
	    this.changeState = this.changeState.bind(this);
  	}
  
  	changeState(){
	    if(this.state.animationClass === 'app'){
	      this.setState({
	        animationClass: 'test paused'
	      });
	    }else{
	      this.setState({
	        animationClass: 'app'
	      });
	    }
  	}

    componentDidMount() {
        this.props.setItems();
    }

    render() {
        return (
            <Router>
                <div className="app">
                    <div className="app-box">
                        <header className="app-header">
                            <span className="app-title">Simple<br/>Todo List App</span>
                        </header>
                        <Route exact path="/" component={List} />
                        <Route exact path="/add" component={FormAdd} />
                        <Route exact path="/edit/:id" component={FormEdit} />
                    </div>
                </div>
            </Router>
        );
    }
}

App.propTypes = {
    setItems: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
    setItems
}, dispatch);

export default connect(null, mapDispatchToProps)(App);
