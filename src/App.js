import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import SearchPage from './components/SearchPage'
import { Route, Switch } from "react-router-dom";
import FrontPage from './components/FrontPage';

class BooksApp extends React.Component {
	state = {
		shelvedBooks: [],
		searchedBooks: []
	}

	componentDidMount() {
		this.getBooks();
	}

	render() {
		return (
			<div className="app">
				<Switch>
					<Route path="/search" >
						<SearchPage searchedBooks={this.state.searchedBooks} onAddBook={this.addBook} onSearch={this.searchBooks} />
					</Route>
					<Route path="/">
						<FrontPage books={this.state.shelvedBooks} onAddBook={this.addBook} />
					</Route>
				</Switch>
			</div>
		)
	}

	getBooks = () => BooksAPI.getAll().then(books => this.setState({ shelvedBooks: books }));

	searchBooks = async (searchString) => {
		let books = [];
		if (searchString) {
			books = await BooksAPI.search(searchString);
			if (!Array.isArray(books))
				books = [];
			else
				this.setExistingShelves(books);
		}
		this.setState({ searchedBooks: books });
	}

	addBook = (book, shelf) => {
		if (book && book.shelf !== shelf) {
			book.shelf = shelf;
			BooksAPI.update(book, shelf).then(() => this.updateBook(book));
		}
	}

	updateBook = (book) => this.setState(prevState => {
		prevState.shelvedBooks = prevState.shelvedBooks.filter(existingBook => existingBook.id !== book.id);
		prevState.shelvedBooks.push(book);
		return prevState.shelvedBooks;
	});

	setExistingShelves = (books) => books.forEach(book => {
		let shelvedBook = this.state.shelvedBooks.find(sb => sb.id === book.id);
		if (shelvedBook)
			book.shelf = shelvedBook.shelf;
	});
}

export default BooksApp
