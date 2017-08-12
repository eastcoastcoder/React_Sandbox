import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import QuizChildOne from './components/QuizChildOne';
import QuizChildTwo from './components/QuizChildTwo';
import DangerQuizChildThree from './components/DangerQuizChildThree';
import CountDisplay from './components/CountDisplay';
import Book from './components/Book';

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
      data: [],
      isLoading: true
    };

    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  componentWillMount() {
    const token = process.env.FBTOKEN;
    fetch(`https://graph.facebook.com/v2.9/1726444857365752/photos?fields=images&access_token=${token}`)
    .then((response) => response.json())
    .then((body) =>
    this.setState({
      isLoading: false,
      data: body
    }))
    .catch(err => console.log(err));
  }

  render() {
    if (this.state.isLoading) return <div>Loading...</div>;
    const styles = {
      color: this.props.foregroundColor,
      backgroundColor: this.props.backgrondColor
    };
    const results = this.state.data.data;
    const dude = results[(Math.random() * results.length | 0)];

    return (
      <div>
        <div><img src={dude.images[0].source} alt="IT IS WEDNESDAY" /></div>
        <CountDisplay style={styles} counter={this.state.counter} />
        <h1>{this.props.foregroundColor}</h1>
        {this.props.books.map((b) => <Book title={b} />)}
        {this.props.children}
      </div>
    );
  }
}
// Default Props Example
Quiz.propTypes = {
  foregroundColor: PropTypes.string.isRequired,
  backgrondColor: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  children: React.PropTypes.node,
  dangerous: PropTypes.string.isRequired
};

Quiz.defaultProps = {
  foregroundColor: 'blue',
  backgrondColor: 'black'
};

ReactDOM.render(
  <div>
    { // Is today an Odd Numbered Day?
      new Date().getDate % 2 !== 0 ?
        <Quiz books={['lol', 'wtf', 'okbbgrl']} >
          <QuizChildOne />
          <QuizChildTwo />
          <DangerQuizChildThree dangerous="<strong>Austin Danger Powers</strong>" />
        </Quiz> :
        <Book title="hi" />
    }
    {'Bob'}{' '}{'Alice'}
  </div>,
    document.querySelector('#root')
);
