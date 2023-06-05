import BookShow from "./BookShow"

function BookList({books, onDelete, onEdit}){
    const renderBooks= books.map((book)=>{
        return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>;
    })
    return( <div><h1>Reading List</h1><div className="book-list">{renderBooks}</div></div>)
}

export default BookList; 