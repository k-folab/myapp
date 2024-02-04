import "./App.css";
import "./styles/Navbar.css";
import "./styles/Herosection.css";
import "./styles/end.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import End from "./components/End";

export default function App() {
  return (
    <div>
      <div
        className="main_div"
        style={{
          backgroundImage: ` linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(https://images.cinemaexpress.com/uploads/user/imagelibrary/2019/5/17/original/john-wick-3-parabellum-movie-review-keanu-reeves.jpg)`,
          backgroundSize: `cover`,
          // height: `fit-content`,
          width: `100vw`,
          height: `100vh`,
        }}
      >
        <Navbar />
        <Herosection />
      </div>

      <div>
        <End />
      </div>
    </div>
  );
}
