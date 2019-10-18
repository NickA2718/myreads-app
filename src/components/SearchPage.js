import React from 'react'
import BookGrid from './BookGrid'
import { Link } from "react-router-dom";

const SearchPage = ({ searchedBooks, onSearch, onAddBook }) => (
	<div className="search-books">
		<div className="search-books-bar">
			<Link to="/" className="close-search" onClick={() => onSearch("")} />
			<div className="search-books-input-wrapper">
				<input type="text" placeholder="Search by title or author" onChange={(event) => onSearch(event.target.value)}/>
			</div>
		</div>
		<div className="search-books-results">
			<BookGrid books={searchedBooks} onAddBook={onAddBook} />
		</div>
	</div>
)


export default SearchPage
