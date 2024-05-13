interface FeaturesItemProps {
  title: string;
  description: string;
  image: string;
}

const FeaturesItem: React.FC<FeaturesItemProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="flex items-start justify-center gap-5 md:col-span-4 md:cursor-pointer md:rounded-[5px] md:p-[20px] md:duration-200 md:ease-linear md:hover:shadow-xl">
      <div className="w-[40px] flex-none">
        <img
          src={image}
          alt=""
          className="h-auto w-full object-cover object-center"
        />
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-2">
          <div className="title font-montserrat text-[16px] font-bold text-[#0f2137]">
            {title}
          </div>

          <div className="description font-montserrat line-clamp-3 overflow-ellipsis text-[14px] leading-6">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesItem;
