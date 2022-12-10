import React from "react";
import { useAuth } from "../authentication/AuthContext";

type Props = {};

const Test = (props: Props) => {
  const { user } = useAuth();
  console.log(user);
  return <div>Hello David. Welcome to the Test page!</div>;
};

export default Test;
