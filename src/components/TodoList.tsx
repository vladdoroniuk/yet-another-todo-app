import { api } from "@/utils/api";

type TodoListProps = {
  userId: number;
};

const TodoList: React.FC<TodoListProps> = ({ userId }) => {
  const res = api.todo.getAll.useQuery({ userId });

  return (
    <>
      <div></div>
    </>
  );
};
