import "./App.css";
import { useState } from "react";
import ItemsList from "./ItemsList";
import Products from "./Products";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="app">
      <h1>Welcome to StoreName!</h1>

      <div className="search">
        <input
          value={search}
          placeholder="Search for Product"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="container">
        {/* class name here is product 
        (mentioned in the ItemsList function) */}
        {Products.filter((val) => {
          if (search === "") {
            return val;
          } else if (val.Name.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        }).map((val, key) => {
          return ItemsList(val);
        })}
      </div>

      <div className="footer">
        <footer>
          <ul className="list">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Location</a>
            </li>
          </ul>
          <p>Contact us</p>
          <div className="Contact">
            <a className="Instagram" href="#">
              Instagram
            </a>
            <a className="WhatsApp" href="#">
              WhatsApp
            </a>
            <a className="Email" href="#">
              Email
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
