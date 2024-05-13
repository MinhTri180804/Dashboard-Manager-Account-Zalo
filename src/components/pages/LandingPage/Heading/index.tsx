import logoImages from "../../../../assets/logo";

const HeadingLadingPage = () => {
  return (
    <div>
      <div className="logo__heading flex w-full items-center justify-center">
        <img
          src={logoImages.logo}
          alt=""
          className="w-[120px] object-cover object-center"
        />
      </div>
    </div>
  );
};

export default HeadingLadingPage;
