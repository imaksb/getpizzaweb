import { useSelector } from "react-redux";
import { IRootState } from "../../store";

function Username() {
  const username = useSelector((state: IRootState) => state.user.username);
  console.log(username);
  if (!username) return null;
  return <div className="hidden text-lg text-slate-100 md:block">{username}</div>;
}

export default Username;
