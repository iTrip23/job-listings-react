import './App.css';
import Header from './components/Header.js';
import Jobs from './data.json';
import JobCard from './components/JobCard.js';

function App() {
  return (
    <div className="App">
      <Header />
      {Jobs.map(job  => (<JobCard job={job} key={job.id} />))}
    </div>
  );
}

export default App;
