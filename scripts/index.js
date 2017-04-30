import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import $ from 'jquery'; 

class Quiz extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 1
        };

        setInterval(function(){
            this.setState({counter: this.state.counter+1});
        }.bind(this), 1000);
    };
    render () {
        var styles = {
            color: this.props.foregroundColor,
            backgroundColor: this.props.backgrondColor
        };
        return (
        <div>
            <CountDisplay style={styles} counter={this.state.counter} />
            <h1>{this.props.foregroundColor}</h1>
            {this.props.books.map(function (b){
                return <Book title={b} />
            })}
        </div>
        )
    }
};
// Default Props Example
Quiz.propTypes = {
    foregroundColor: PropTypes.string.isRequired,
    backgrondColor: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
};

Quiz.defaultProps = {
    foregroundColor: 'blue',
    backgrondColor: 'black'
};

class CountDisplay extends React.Component {
    componentDidUpdate () {
        var node = $(ReactDOM.findDOMNode(this));
        node.slideUp();
        node.slideDown();
    }
    render () {
        return (
            <h1 style={this.props.style}>This has state counter {this.props.counter}</h1>
        )
    }
}

class Book extends React.Component {
    render () {
        return (
          <div><h4>this comment says: {this.props.title}</h4></div>
        )
    }
};

ReactDOM.render(
    <Quiz books={['lol', 'wtf', 'okbbgrl']} />,
    document.querySelector('#root')
);
