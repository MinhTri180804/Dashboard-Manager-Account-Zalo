import { Link } from "react-router-dom";

interface ButtonLandingPageProps {
  content: string;
  navigation?: string;
}

const ButtonLandingPage: React.FC<ButtonLandingPageProps> = ({
  content,
  navigation,
}) => {
  return (
    <button className=" rounded-[5px] bg-[#02073E] px-5 py-3 font-montserrat text-[14px] text-white">
      {navigation ? (
        <Link to={navigation}>
          <a>{content}</a>
        </Link>
      ) : (
        content
      )}
    </button>
  );
};

export default ButtonLandingPage;
