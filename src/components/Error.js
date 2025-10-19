import { useRouteError } from "react-router-dom";
import Header from "./Header";
const Error = () => {
    const err = useRouteError();
  return (
    <div>
      <Header />
      <h1>Oops...!!!</h1>
      <h3>{err.data}</h3>
    </div>
  );
};

export default Error;
