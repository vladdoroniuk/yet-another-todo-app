import { api } from "@/utils/api";

interface TodoListProps {
  userId: number;
}

export const TodoList: React.FC<TodoListProps> = ({ userId }) => {
  const { isLoading, error, data } = api.todo.getAll.useQuery({ userId });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error has occured: {error.message}</div>;
  }

  return (
    <div>
      <ul>
        {data.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};
