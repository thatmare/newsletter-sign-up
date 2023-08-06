// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Figure } from './src/components/Figure';
import { Article } from './src/components/Article';
import { Form } from './src/components/Form';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Figure/>
    <Article/> 
    <Form/>
  </React.StrictMode>,
)