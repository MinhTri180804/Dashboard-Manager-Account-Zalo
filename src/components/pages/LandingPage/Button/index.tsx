interface ButtonLandingPageProps {
  content: string;
}

const ButtonLandingPage: React.FC<ButtonLandingPageProps> = ({ content }) => {
  return (
    <button className=" rounded-[5px] bg-[#02073E] px-5 py-3 font-montserrat text-[14px] text-white">
      {content}
    </button>
  );
};

export default ButtonLandingPage;
