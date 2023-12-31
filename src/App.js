//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbars";
import Footer from "./components/Footer";
//import Body from "./components/Body";
//import Sidebar from "./components/Sidebar";
import TextForm from "./components/Body/TextForm";
import About from "./components/Body/About";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

//let name = "Rahul Kumar";
function App() {
  //Creating the hooks to set the theme..
  const [theme, setTheme] = useState(false);
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

    <>
      {/* <Navbar title="ReactJs" about="About Us" /> */}
      <Navbar
        logoUrl="/logoReact.png"
        about="AboutUs"
        theme={theme}
        setTheme={setTheme}
      />
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        {/* <Body /> */}
        <Routes>
          <Route
            path="/"
            element={<TextForm heading="TextUtils" theme={theme} />}
          />
          <Route path="about" element={<About theme={theme} />} />
        </Routes>
        {/* <Sidebar /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
