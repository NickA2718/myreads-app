import React from 'react'
import BookShelf from './BookShelf'
import { Link } from "react-router-dom";
import { Shelves } from '../utils/constants';

const FrontPage = ({ books, onAddBook}) => (
	<div className="list-books">
		<div className="list-books-title">
			<h1>MyReads</h1>
		</div>
		<div className="list-books-content">
			{Object.keys(Shelves).map(shelve => <BookShelf key={shelve} title={Shelves[shelve]} books={books.filter(book => book.shelf===shelve)} onAddBook={onAddBook} />)}
		</div>
		<Link to="/search" className="open-search" />
	</div>
)

export default FrontPage
