import { useState } from "react";
import SubmitButton from "../../ui/SubmitButton";
import { useDispatch } from "react-redux";
import { updateUsername } from "./userSlice";

function CreateUser() {
  const [username, setUsername] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!username) return;
    dispatch(updateUsername(username));
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 space-x-3 text-sm sm:text-base">
        👋 Welcome! Provide your full name, pls:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        className="input mb-8 w-72"
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <SubmitButton type="primary" isSubmitting={isSubmitting}>
            Start ordering
          </SubmitButton>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
