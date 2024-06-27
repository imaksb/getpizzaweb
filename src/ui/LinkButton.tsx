import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }: { children: React.ReactNode; to: string }) {
  const navigate = useNavigate();
  const className = "text-l text-orange-500 hover:text-orange-700";
  if (to === "-1") {
    return (
      <button onClick={() => navigate(-1)} className={className}>
        {children}
      </button>
    );
  }
  return (
    <>
      <Link to={to} className={className}>
        {children}
      </Link>
    </>
  );
}

export default LinkButton;
