import './App.css';
import Header from './structure/header/header';
// import Text from './functions/textGenerator/textGenerator';
// import Card from './structure/card/card';
import Grid from './structure/grid/grid';

function App() {
  return (
    <>  
      <Header
        text = 'FAVOURITES STAR WARS CHARACTERS'
      />
      <Grid/>
    </>
  );
}

export default App;
