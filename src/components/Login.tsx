interface Props {
  text: string;
}

export const Login: React.FC<Props> = ({ text }) => {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-teal-900 text-2xl">{text}</h1>
      </div>
    </>
  );
};
