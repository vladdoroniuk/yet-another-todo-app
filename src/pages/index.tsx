import { trpc } from "../utils/trpc";

const Home = () => {
  const res = trpc.todos.useQuery();

  if (!res.data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <h1 className="text-3xl font-bold">Yet Another Todo App</h1>
        <ul>
          {res.data.todos.map((item) => (
            <li key={item.id}>{item.todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
