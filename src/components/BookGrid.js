import React from 'react'
import Book from './Book'

const BookGrid = ({ books, onAddBook }) => (
	<ol className="books-grid">
		{
			books.map(book => (
				<li key={book.id}>
					<Book book={book} onAddBook={onAddBook} />
				</li>
			))
		}
	</ol>
)

export default BookGrid
