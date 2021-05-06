import './App.css';
import React, { useState } from 'react';
import Header from './components/Header.js';
import Jobs from './data.json';
import JobCard from './components/JobCard.js';

function App() {
  const [filterBy, setFilterBy] = useState([])

  const pushFilterElem = (tag) => {
    if (!filterBy.includes(tag)) {
      setFilterBy([...filterBy, tag]);
    }
  }

  Jobs.forEach(job => {
    const filter = [];
    filter.push(job.role)
    filter.push(job.level)
    filter.push(...job.languages)
    filter.push(...job.tools)
    job.tags = filter;
  })

  const filtered = Jobs.filter(job => filterBy.every(elem => job.tags.includes(elem)));

  return (
    <div className="App">
      <Header />
      {filtered.map(job => (<JobCard job={job} key={job.id} pushFilterElem={pushFilterElem} />))}
    </div>
  );
}

export default App;
