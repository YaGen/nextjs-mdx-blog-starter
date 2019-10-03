import React from "react";
import Head from "next/head";
import Link from "next/link";
import blogposts from "../data/blog-posts";

const PostItem = ({ path, title, preview }) => (
  <>
    <Link href={path}>
      <a className="card">
        <h3>{title}</h3>
        <p>{preview}</p>
      </a>
    </Link>

    <style jsx>{`
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
        cursor: pointer;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </>
);

const Home = () => (
  <div>
    <div className="hero">
      <div className="row">
        {blogposts.map((item, index) => (
          <PostItem key={index} {...item}></PostItem>
        ))}
      </div>
    </div>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }

      .hero {
        width: 100%;
        color: #333;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    `}</style>
  </div>
);

export default Home;
