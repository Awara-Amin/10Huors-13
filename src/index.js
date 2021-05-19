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
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      {/* <h1>I love you to the Moon and Back</h1> */}
      {/* <h3>Amelia ...</h3> */}
      <h3>{author.toUpperCase()}</h3>{" "}
      {/* see because you are using javaScript in JSX, you can add function directly */}
      {/* <p>{4 + 4}</p> */}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
