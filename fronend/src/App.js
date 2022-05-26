import { Link } from "react-router-dom";
import Routing from "./router";
import AddBoxIcon from "@mui/icons-material/AddBox";
import "./App.css";
function App() {
  return (
    <div className="app">
      <div className="container-link">
        <div className="navbar-group">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </div>
        <div className="navbar-group">
          <AddBoxIcon className="icon" />
          <Link to="/todo/create" className="navbar-link">
            Create
          </Link>
        </div>
      </div>
      <Routing />
    </div>
  );
}

export default App;
