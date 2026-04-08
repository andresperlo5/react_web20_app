import { useEffect } from "react";
import { useChangeTitlePage } from "../helpers/changeTitle";

const ErrorPage = () => {
  useEffect(() => {
    useChangeTitlePage("error");
  }, []);
  return <div>ErrorPage</div>;
};

export default ErrorPage;
