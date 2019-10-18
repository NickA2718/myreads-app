import React from 'react'
import { Shelves } from '../utils/constants';

const Book = ({book, onAddBook}) => (
	<div className="book">
		<div className="book-top">
			<div className="book-cover" style={{ width: 128, height: 200, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})`}}></div>
			<div className="book-shelf-changer">
				<select value={book.shelf || "none"} onChange={(event) => onAddBook(book, event.target.value)}>
					<option value="move" disabled>Move to...</option>
					{Object.keys(Shelves).map(shelve => <option key={shelve} value={shelve}>{Shelves[shelve]}</option>)}
					<option value="none">None</option>
				</select>
			</div>
		</div>
		<div className="book-title">{book.title}</div>
		{ book.authors && book.authors.map(author => <div key={author} className="book-authors">{author}</div>)}
		
	</div>
)

export default Book
