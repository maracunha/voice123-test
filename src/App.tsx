import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import Search from './pages/Search';

const App = () => {
  const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Search />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
