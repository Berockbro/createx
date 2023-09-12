import React from 'react';
import ReactDOM from 'react-dom';
import styles from './App.module.css';
import './index.css';

function App() {
  return (
    <div className={styles.App}>
      
    </div>
  );
}

const rootElement = document.getElementById('root');

if (rootElement) {
  //@ts-ignore
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}


export default App;
