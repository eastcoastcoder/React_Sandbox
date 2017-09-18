import React from 'react';
import QuizChildOne from './QuizChildOne';
import QuizChildTwo from './QuizChildTwo';
import DangerQuizChildThree from './DangerQuizChildThree';
import Book from './Book';
import Quiz from './Quiz';

class Main extends React.Component {
  render() {
    return (
      <div>
        { // Is today an Odd Numbered Day?
          new Date().getDate % 2 !== 0 ?
            <Quiz books={['lol', 'wtf', 'okbbgrl']} >
              <QuizChildOne />
              <QuizChildTwo />
              <DangerQuizChildThree dangerous="<strong>Austin Danger Powers</strong>" />
            </Quiz> :
            <Book title="hi" interval={5000} onInterval={doTheThing} />
        }
        {'Bob'}{' '}{'Alice'}
      </div>
    );
  }
}

function doTheThing() {
  console.log('Hello from a function on the parent.');
}

export default Main;
