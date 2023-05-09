import TopNav from "../components/presentational/header/TopNav";
import Nav from "../components/presentational/header/Nav";
import MainContent from "../components/presentational/mainContent/MainContent";

const Home = () => {
  return (
    <div className="home">
      <TopNav />
      <Nav />
      <MainContent/>
    </div>
  );
};

export default Home;
