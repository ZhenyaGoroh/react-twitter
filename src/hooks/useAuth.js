import { useSelector } from "react-redux";

function useAuth() {
  const { email, token, id, name } = useSelector((state) => state.user);

  return {
    isAuth: !!token,
    email,
    token,
    id,
    name,
  };
}

export default useAuth;
