import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/featured";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />;
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property</h1>
      </div>
    </div>
  );
};

export default Home;
