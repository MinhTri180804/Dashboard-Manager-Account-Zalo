interface IAccountOptionsProps {}
const AccountOptions: React.FC<IAccountOptionsProps> = () => {
  return (
    <div className="flex items-center justify-start gap-2">
      <div className="h-8 w-8">
        <img
          src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
          alt="avatar"
          className="h-full w-full rounded-full object-cover"
        />
      </div>
      <div className="text-[12px] font-normal text-green-400">0398512312</div>
    </div>
  );
};

export default AccountOptions;
