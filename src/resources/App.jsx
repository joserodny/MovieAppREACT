import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Nav from "./partials/Nav";

function App() {
  return (
      <div className="App">
          <Router>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie" element={<Movie />} />
              <Route path="*"element={
                      <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                      </main>
                    }
              />
            </Routes>
          </Router>
      </div>

  );
}

export default App;
