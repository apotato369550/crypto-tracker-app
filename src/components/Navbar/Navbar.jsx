import React, { useContext } from 'react'
import "./Navbar.css"
import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext"
import { Link } from 'react-router-dom';

const Navbar = () => {
  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      case "php": {
        setCurrency({ name: "php", symbol: "₱" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  }

  return (
    <div className="navbar">
      <a
        className="logo"
        href="https://apotato369550.github.io/portfolio-site/"
      >
        JAY
      </a>
      <ul>
        <Link to="/crypto-tracker-app/">
          <li>Home</li>
        </Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
          <option value="php">PHP</option>
        </select>
        <button>
          Sign up <img src={arrow_icon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Navbar