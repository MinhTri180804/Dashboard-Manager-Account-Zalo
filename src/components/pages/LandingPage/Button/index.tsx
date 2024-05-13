interface ButtonLandingPageProps {
  content: string;
}

const ButtonLandingPage = ({ content }: ButtonLandingPageProps) => {
  return (
    <button className="font-work rounded-[5px] bg-[#02073E] px-5 py-3 text-[14px]  text-white">
      {content}
    </button>
  );
};

export default ButtonLandingPage;
