import React from 'react';
import ReactDOM from 'react-dom/client';
import { DhgoNote } from '@common/components/widgets/DhgoNote';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      height: 'fit-content',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#f0f0f0',
      padding: '40px',
      boxSizing: 'border-box',
      overflow: 'auto'
    }}>
      <div style={{
        width: '800px',
        maxWidth: '90%',
        marginTop: '40px',
        marginBottom: '40px'
      }}>
        <DhgoNote />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 