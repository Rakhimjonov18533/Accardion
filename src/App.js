import React, { useState } from 'react';
import questions from './data';
import data from './data';
import SingleQuestions from './Questions';

function App() {
  const [questions, setQuestions] = useState(data);
  return(
    <main>
      <div className='container'>
        <h3>Questions And Answers About Login</h3>
        <section className="info">
          {questions.map((question)=> {
            return(
              <SingleQuestions key={question.id} {...question}></SingleQuestions>
            )
          })}
        </section>
      </div>
    </main>
  )
}
export default App;