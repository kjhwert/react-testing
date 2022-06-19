type Props = {
  title: string;
  onClick(): void;
  disabled?: boolean;
};

export const Button = ({ disabled = false, onClick, title }: Props) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {title}
    </button>
  );
};
