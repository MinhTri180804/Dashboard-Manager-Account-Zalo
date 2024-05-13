interface HeadingLandingPageComponentProps {
  logo: string;
  content: string;
  imageHeading?: string;
}

const HeadingLandingPageComponent: React.FC<
  HeadingLandingPageComponentProps
> = ({ logo, content, imageHeading }) => {
  return (
    <div className="flex flex-col items-center justify-center md:container md:mx-auto md:max-w-[1280px] md:px-[125px]">
      <div className="logo__heading flex w-full items-center justify-center">
        <img
          src={logo}
          alt=""
          className="] h-auto w-[120px] object-cover object-center"
        />
      </div>

      <div className=" font-montserrat text-center text-[24px] font-bold text-[#02073E] md:px-[60px] md:text-[50px]">
        {content}
      </div>

      <div className="mt-6 w-full rounded-tl-[10px] rounded-tr-[10px] border border-[#E2E9F0] px-4 pt-4">
        <img
          src={imageHeading}
          alt=""
          className="rounded- h-full w-full rounded-tl-[10px] rounded-tr-[10px] object-cover object-center"
        />
      </div>
    </div>
  );
};

export default HeadingLandingPageComponent;
