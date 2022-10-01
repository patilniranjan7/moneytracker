import logo from './logo.svg';
import './App.css';
import { StoreWrapper } from './store/StoreWrapper';
import RouteList from './routes/RouteList';
import { SnackbarProvider } from 'notistack';
function App() {
  return (
    <StoreWrapper>
      <SnackbarProvider maxSnack={3}>
        <RouteList />
      </SnackbarProvider>
    </StoreWrapper>
  );
}

export default App;
