import { useGlobalContext } from "../Context";
const User = () => {
  const { user, signOut } = useGlobalContext();
  return user ? (
    <>
      <h3 className="font-bold">user: {user?.name}</h3>
      <span
        onClick={signOut}
        className="bg-red-600 rounded-lg p-2 font-bold text-white cursor-pointer hover:bg-red-700 transition-colors"
      >
        Sign Out
      </span>
    </>
  ) : (
    <span className="p-2 text-green-400 font-bold rounded-lg">SignUp</span>
  );
};

export default User;
