import logo from './logo.svg';
import './App.css';
import { StoreWrapper } from './store/StoreWrapper';
import RouteList from './routes/RouteList';

function App() {
  return (
    <StoreWrapper>
      <RouteList />
    </StoreWrapper>
  );
}

export default App;
