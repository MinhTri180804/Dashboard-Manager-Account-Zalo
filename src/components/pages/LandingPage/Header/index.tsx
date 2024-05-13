import logoImages from "../../../../assets/logo";
import ButtonLandingPage from "../Button";

const HeaderComponent = () => { 
  return (
    <div className=" sticky top-0 z-50 bg-[#F9FBFD] px-5 py-7">
      <div className="flex items-center justify-between md:container md:mx-auto md:max-w-[1280px]">
        <div className="logo">
          <img
            src={logoImages.logoAndBrand}
            alt=""
            className="w-[140px] object-cover object-center"
          />
        </div>

        <ButtonLandingPage content="Đăng nhập" />
      </div>
    </div>
  );
};

export default HeaderComponent;
