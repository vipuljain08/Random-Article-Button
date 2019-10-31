import React, { useEffect, useState } from 'react';
import Database from './data/Articles';
import './App.css';

function App() {
    const [articles, setArticles]  = useState([])

    useEffect( () => {
        getArticles();
    }, [])

    
    const getArticles = async (e) => {

        /* You can also use a fake rest api for fetching data with using typicode's json-server */
        
        // const response = await fetch(`http://localhost:3001/articles`) 
        // const data = response.json()

        const data = await Database

        // Create array of object data
        const values = Object.values(data)

        // Generate random index based on number of data
        const randomArticle = values[Math.floor(Math.random() * values.length)] 
        console.log(randomArticle)
        setArticles(randomArticle)
    }
    return (
        <div className="App">
            <div className="container mt-5 mb-4">
                <div className="row">
                    <div className="col-lg-12 mb-4 home-header">
                        <center>
                            <h1 className="head-title mb-5">
                            Discover a new article at 
                            <br/> the click of a button <span role="img" aria-label="🙌 "> 🙌 </span> 
                            </h1>
                            <button className="btn btn-outline-secondary" onClick={getArticles}>Give me another random article</button>
                        </center>
                    </div>
                    <div className="col-lg-12 mt-4 article-title">
                        <h2 className="mb-5">Here is your random article</h2>
                        <div className="container article-title-link">
                            <div className="row">
                                <div className="col-lg-12">
                                <a href={articles.url} target="_blank" rel="noopener noreferrer">
                                    
                                    <h2 className="mt-4 mb-4"> {articles.name} </h2>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
