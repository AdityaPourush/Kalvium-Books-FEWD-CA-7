import React, { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import axios from 'axios';
import Context from "../Context/Context";

const HomePage = ()=>{

    const [books, setbooks] = useState([])
    useEffect(()=>{
        axios.get('https://reactnd-books-api.udacity.com/books', {
            headers: {
                'Authorization' : 'whatever-you-want',
            },
        }).then((res)=>{
            setbooks(res.data.books);
            // console.log(res.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[])

    const {search} = useContext(Context);
    // console.log('search :', search);

    // console.log(books);

    const filteredBooks = books.filter((book)=>book.title.toLowerCase().includes(search.toLowerCase()));
    return(
        <> 
            <div className="nav-container">
                <Navbar/>
            </div>
            <div className="books-container">
                {filteredBooks.length !=0 ? 
                    filteredBooks.map((e,i)=>{
                        return <div className="book" key={i}>
                            <img src={e.imageLinks.thumbnail} alt="" />
                            <p>{e.title}</p>
                            <p style={{display: "flex", alignItems: "center"}}>{e.averageRating} <img src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1" id="star1"/> <span>Free</span> </p>
                        </div>
                    }) : <div>
                        <h1>No Such Book Found</h1>
                    </div>
                }
            </div>
        </>
    )
}

export default HomePage;

// {
//     books.map((e,i)=>{
//         return <div className="book" key={i}>
//             <img src={e.imageLinks.thumbnail} alt="" />
//             <p>{e.title}</p>
//             <p style={{display: "flex", alignItems: "center"}}>{e.averageRating} <img src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1" id="star1"/> <span>Free</span> </p>
//         </div>
//     })}