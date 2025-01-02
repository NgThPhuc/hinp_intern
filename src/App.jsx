import './App.css';
import { AppRouter } from './routers/Route';
import { SearchProvider } from './context/SearchContext';

function App() {
  return (
    <SearchProvider>
      <AppRouter />
    </SearchProvider>
  );
}

export default App;
