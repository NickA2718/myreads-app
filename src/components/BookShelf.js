import React from 'react'
import BookGrid from './BookGrid'

const BookShelf = ({title, books, onAddBook}) => (
	<div className="bookshelf">
		<h2 className="bookshelf-title">{title}</h2>
		<div className="bookshelf-books">
			<BookGrid books={books} onAddBook={onAddBook} />
		</div>
	</div>
)

export default BookShelf
