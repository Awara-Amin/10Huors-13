import React from "react";
import ReactDom from "react-dom";

// adding CSS file
import "./index.css";

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
      <Image> </Image>
      <Title />
      <Author />
      {/* This is a listCar  */}
    </article>
  );
};

// const Image =() => {
// return <img
//   src='https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg' alt='' />
// }

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg"
    alt=""
  />
);

const Title = () => <h1>I love you to the Moon and Back</h1>;
const Author = () => (
  // this is how we add styling using javaScript
  <h2 style={{ color: "#617d98", fontSize: "4rem", marginTop: "0.25rem" }}>
    Amelia ...
  </h2>
);

ReactDom.render(<BookList />, document.getElementById("root"));
