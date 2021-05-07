import './App.css';
import React, { useState } from 'react';
import Header from './components/Header.js';
import Jobs from './data.json';
import JobCard from './components/JobCard.js';
import FilterTag from './components/FilterTag';

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

	const removeTagFromFilterBy = index => {
		filterBy.splice(index, 1)
		setFilterBy([...filterBy]);
	};
	const clearFilter = () => setFilterBy([]);

	const filteredJobs = Jobs.filter(job => filterBy.every(elem => job.tags.includes(elem)));

	return (
		<div className="parent-element">
			<Header />
			<section className={filterBy.length === 0 ? 'display-none' : 'filter-container'}>
				<div className='tags-container'>
					{filterBy.length > 0 ? filterBy.map((tag, index) => <FilterTag
						tag={tag} index={index}
						removeTagFromFilterBy={removeTagFromFilterBy}
						key={index} />) : null}
				</div>
				<div className='clear-filters' onClick={clearFilter}>Clear</div>
			</section>
			<section className='job-cards-container'>
				{filteredJobs.map(job => (<JobCard job={job} key={job.id} pushFilterElem={pushFilterElem} />))}
			</section>
		</div>
	);
}

export default App;
