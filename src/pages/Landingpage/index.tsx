import HeaderComponent from "../../components/pages/LandingPage/Header";
import HeadingLadingPage from "../../components/pages/LandingPage/Heading";

const LandingPage = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="bg-[#F9FBFD] px-5 py-[40px]">
        <HeadingLadingPage />
      </div>
    </div>
  );
};

export default LandingPage;
