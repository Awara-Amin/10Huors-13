import React from "react";
import ReactDom from "react-dom";

// adding CSS file
import "./index.css";

// setup vars
const author = "Amelia ...";
const title = "I love you to the Moon and Back";
const img = "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book job="developer" />

      <Book />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h3>{author}</h3>{" "}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
