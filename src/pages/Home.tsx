import { FC } from "react";
import { Helmet } from "react-helmet";

import { TodoList } from "../components/TodoList";

export const Home: FC = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <h1 data-testid="page-title">Home</h1>
      <p>Todo list.</p>
      <TodoList />
    </>
  );
};
