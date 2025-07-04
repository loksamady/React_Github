import fetchData from "../hooks/fetchData";
const Profile = () => {
  const { data } = fetchData("https://api.github.com/users");
  return (
    <div className="grid grid-flow-col grid-rows-8 gap-10 ">
      {data.map(({ id, avatar_url, login, html_url }) => (
        <article
          className="p-10 px-5 bg-gray-300 rounded-lg mb-5 hover:bg-green-400 cursor-pointer"
          key={id}
        >
          <img
            className="mb-5 object-cover w-[196px] h-[196px] rounded-full bg-yellow-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            src={avatar_url}
            alt={login}
          />
          <h3>{login}</h3>
          <a href={html_url}></a>
        </article>
      ))}
    </div>
  );
};
export default Profile;
