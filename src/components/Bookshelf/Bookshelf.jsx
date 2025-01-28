import { useState } from 'react';
const Bookshelf = () => {

    let initialState = {
        title: "",
        author: "",
    }

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    const [formData, setFormData] = useState(initialState);


    const handleChange = (event) => {

        const newFormData = { ...formData, [event.target.name]: event.target.value }

        setFormData(newFormData)
    }

    const handleSubmit = (event) => {


        event.preventDefault()

        const newBook = [...books, { title: event.target.title.value, author: event.target.author.value, }]

        setBooks(newBook)
        setFormData(initialState)

    }


    return (

        <div className="bookshelfDiv">


            <div className="formDiv">
                <h3>Add a Book</h3>
                {<form onSubmit={handleSubmit}>
                    <label htmlFor="">Title </label>
                    <input type="text" value={formData.title} onChange={handleChange} name="title" />
                    <br></br>
                    <label htmlFor="">Author </label>
                    <input type="text" value={formData.author} onChange={handleChange} name="author" />
                    <br></br>
                    <button className="button" type='submit'>Add Book</button>
                </form>}
            </div>


            {books.map((book,index) => (
                <div key={index} className="bookCard" >

                    <b><h3>{book.title}</h3></b>
                   
                    <p>{`by ${book.author}`}</p>

                </div>
            ))}

        </div>
    )
}
export default Bookshelf;
