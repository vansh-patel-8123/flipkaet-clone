import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {Box} from '@mui/material';


function App() {
  return (
    <div className="App">
      <Header />
      <Box style={{ marginTop: 54}}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
