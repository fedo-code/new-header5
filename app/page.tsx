import Header from "../component/Header";
import InfoSection from "../component/InfoSection";
import NewsSection from "../component/NewsSection";
import FranchisePowerRankings from "../component/FranchisePowerRankings";
import LandingHero from "../component/LandingHero"; // <-- add this import

export default function Home() {
  return (
    <>
      <Header />
      <InfoSection />
      <NewsSection />
      <FranchisePowerRankings />
      <LandingHero /> {/* <-- render the new component here */}
    </>
  );
}
