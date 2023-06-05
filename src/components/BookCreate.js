import { useState } from "react";
function BookCreate({onCreate}){
    const [title, setTitle]= useState('');

    const handleCreate=(event)=>{
        setTitle(event.target.value);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        onCreate(title);
        setTitle('');
    }

    return <div className="book-create">
        <form onSubmit={handleSubmit}>
            <h3>Add a Book</h3>
            <label>Title</label>
            <input className="input" onChange={handleCreate}/>
            <button className="button">Create</button>
        </form>
    </div>;
}

export default BookCreate; 