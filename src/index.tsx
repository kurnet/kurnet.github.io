import { createRoot } from 'react-dom/client';
import { App } from './App';
import React from 'react';

// Render your React component instead
const root = createRoot(document.getElementById('navigation')!);
root.render(<App />);