//import logo from './logo.svg';
import './App.css';
import CenteredCard from './components/CenteredCard/CenteredCard';

function App() {

  const childrens = [1, 2, 3]

  return (
    <div className="App">
      <div className="App-header">

        {
          childrens.map((item)=>(
            <CenteredCard ><em> {item}</em></CenteredCard>
          ))
        }

      </div>
    </div>
  );
}

export default App;
