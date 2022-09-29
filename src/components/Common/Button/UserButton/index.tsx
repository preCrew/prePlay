import user from '@src/assets/user.png';

interface UserButtonProps {
  className?: string;
}
const UserButton = ({ className }: UserButtonProps) => {
  return (
    <button className={`${className} `}>
      <img
        src={user}
        alt="user"
      />
    </button>
  );
};

export default UserButton;
