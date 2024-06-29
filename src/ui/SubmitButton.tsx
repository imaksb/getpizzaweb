import { Link } from "react-router-dom";

interface SubmitButtonProps {
  isSubmitting?: boolean;
  to?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Оновлено тут
  type: "base" | "primary" | "small";
}
const base =
  "transition-c rounded-lg bg-green-600 font-semibold uppercase tracking-wide text-slate-100 duration-300 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-400 focus:ring-offset-2 disabled:cursor-not-allowed";

const styles = {
  base: base,
  primary: base + " px-4 py-3",
  small: base + " px-3 py-2 text-xs",
};

function SubmitButton({ children, isSubmitting, to, type, onClick }: SubmitButtonProps) {
  const className = styles[type];

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button disabled={isSubmitting} className={className} onClick={onClick}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={isSubmitting} className={className}>
      {children}
    </button>
  );
}

export default SubmitButton;
