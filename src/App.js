import React from "react";
import Form from "./components/Form";
import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import { useGlobalContext } from "./context";

const App = () => {
  const { showModal } = useGlobalContext();
  return (
    <main>
      <Form />
      <Favorites />
      <Meals />
      {showModal && <Modal />}
    </main>
  );
};

export default App;
