import { api } from "@/utils/api";
import { useForm } from "react-hook-form";

type LoginFormProps = {
  text: string;
};

export const LoginForm: React.FC<LoginFormProps> = ({ text }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form action="/" method="post">
      <div></div>
    </form>
  );
};
