import { ReactElement } from 'react';
import './reset.scss';
import './App.scss';

const App = (): ReactElement => {

  return (
    <>
      <h1 className="font-serif">matt stvartak</h1>
      <h2>engineer, <br/>designer & illustrator</h2>
      <p>making cool shit in <strong>Concord, North Carolina</strong>. let's work together.</p>
      <a href="mailto:hello@mattstvartak.com" className="button">email me</a>
    </>
  )
}

export default App
