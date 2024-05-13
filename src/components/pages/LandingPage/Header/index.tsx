import logoImages from "../../../../assets/logo";
import ButtonLandingPage from "../Button";

const HeaderComponent = () => {
  return (
    <header className="flex items-center justify-between bg-[#F9FBFD] px-5 py-7">
      <div className="logo">
        <img
          src={logoImages.logoAndBrand}
          alt=""
          className="w-[140px] object-cover object-center"
        />
      </div>

      <ButtonLandingPage content="Đăng nhập" />
    </header>
  );
};

export default HeaderComponent;
