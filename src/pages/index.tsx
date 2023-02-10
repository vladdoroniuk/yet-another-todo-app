import { TodoList } from "@/components/TodoList";

const Home = () => {
  return (
    <div className="flex justify-center">
      <TodoList userId={1} />
    </div>
  );
};

export default Home;
