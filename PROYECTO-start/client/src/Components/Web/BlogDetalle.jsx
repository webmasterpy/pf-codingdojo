import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Navegacion from './Navegacion'
import './BlogDetalle.css'

const BlogDetalle = () => {

    const [blog, setBlog] = useState({});
    // const navigate = useNavigate();
    const { idBlog } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/blog/detalle/${idBlog}`)
            .then(res => {
                setBlog(res.data.results);
                console.log(res.data.results)
            })
            .catch(err => console.log(err))
    }, [idBlog])

    return (
        <>
        <div id="home">
            <Navegacion/>
            <div className="page-section blog-single gray-bg">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-lg-12 m-15px-tb">
                            <article className="article">
                                <div className="article-img">
                                    <img src={`../assets/blog/${blog.imagen}`} title={blog.titulo} alt={blog.titulo} width={"100%"}/>
                                </div>
                                <div className="article-title">
                                    <h6>Blog</h6>
                                    <h2>{blog.titulo}</h2>
                                </div>
                                <div className="article-content" id="detalle_blog">
                                    {blog.html}
                                </div>
                            </article>
                            <a href="/#blog">
                                <button className="btn btn-primary">Volver</button>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
    
}

export default BlogDetalle