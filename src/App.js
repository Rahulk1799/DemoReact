import logo from "./logo.svg";
import "./App.css";

let name = "Rahul Kumar";
function App() {
  return (
    /*
    Note :- a).We can return only one Element tag. In this case div element..
            If you want to return the multiple element tag then you have to use the jsx fragment tag (<> </>)...
            b).We generally return jsx code inside the return block..
    */
    // <>
    // <h2>Hello, This is my first React app..</h2>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React Easily
    //     </a>
    //   </header>
    // </div>
    // </>
    //<>
    /* <div className="hello">Welcome to the ReactJs...</div> */
    /* <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Terms and Conditions</li>
      </nav>
      <div className="para">
        <h2>Hello Mr. {name}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
          deleniti eos veniam fugiat eveniet ut iusto voluptatem voluptatum
          dignissimos cum!
        </p>
      </div> */
    // </>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          ReactApp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Homes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default App;
