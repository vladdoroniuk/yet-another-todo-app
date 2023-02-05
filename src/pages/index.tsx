import { api } from "@/utils/api";

const Home = () => {
  const res = api.user.getAll.useQuery();

  if (!res.data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <ul>
          {res.data.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
