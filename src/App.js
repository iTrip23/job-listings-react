import './App.css';
import Header from './components/Header.js';
import Jobs from './data.json';
import JobCard from './components/JobCard.js';

function App() {
  const filterBy = [];
  const pushFilterElem = (tag) => {
    if (!filterBy.includes(tag)) {
      filterBy.push(tag)
    }
    console.log(filterBy);
  }
  // Jobs.filter(job => )


  return (
    <div className="App">
      <Header />
      {Jobs.map(job => (<JobCard job={job} key={job.id} pushFilterElem={pushFilterElem} />))}
    </div>
  );
}

export default App;
