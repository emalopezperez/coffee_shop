import TopNav from "../components/presentational/header/TopNav";
import Nav from "../components/presentational/header/Nav";
import MainContent from "../components/presentational/mainContent/MainContent";
import CardsInfo from "../components/presentational/mainContent/CardsInfo";
import Incentives from "../components/presentational/mainContent/Incentives";
import Banner from "../components/presentational/banners/Banner";
import Menu from "../components/presentational/menu/Menu";

const Home = () => {
  return (
    <div className="home">
      <TopNav />
      <Nav />
      <MainContent/>
      <CardsInfo/> 
      <Incentives/>
      <Banner/>
      <Menu/>
    </div>
  );
};

export default Home;
