import React, { useEffect, useState } from "react";
import axios from 'axios';

const Blog = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/blog/tres')
            .then(res => {
                //console.log(res.data);
                setBlogs(res.data.results);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <section className="page-section section gray-bg" id="blog">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 text-center">
                        <div className="section-title">
                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Blog & Noticias</h2>
                        {/* <!-- iconos --> */}
                        <div className="divider-custom">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                {
                    blogs.map((blog, indice)=>{
                        return (
                            <div className="col-lg-4" key={indice}>
                                <div className="blog-grid">
                                    <div className="blog-img">
                                        {/* <div className="date">04 FEB</div> */}
                                        <a href={`blog/${blog._id}`}>
                                            <img src={`../assets/blog/${blog.imagen}`} title={blog.titulo} alt={blog.titulo}/>
                                        </a>
                                    </div>
                                    <div className="blog-info">
                                        <h5><a href={`blog/${blog._id}`}>{blog.titulo}</a></h5>
                                        {/* <p>.</p> */}
                                        <div className="btn-bar">
                                            <a href={`blog/${blog._id}`} className="px-btn-arrow">
                                                <span>Ver mas..</span>
                                                <i className="arrow"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </section>
    )
}

export default Blog