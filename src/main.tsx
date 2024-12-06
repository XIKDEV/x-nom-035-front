import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Nom35App from './App.tsx';
import './ui/styles/global.css';
import './ui/styles/inputs.css';
import './ui/styles/buttons.css';
import './ui/styles/cards.css';
import './ui/styles/headers.css';
import './ui/styles/forms.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Nom35App />
    </QueryClientProvider>
  </StrictMode>
);
