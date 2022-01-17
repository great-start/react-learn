import React from "react";

import './App.css';
import Form from "./components/Forms/Form";
import Cars from "./components/Cars/Cars";
import UpdateForm from "./components/Forms/UpdateForm";
import DeleteForm from "./components/Forms/DeleteForm";

function App() {
  return (
      <>
          <Form />
          <UpdateForm />
          <DeleteForm />
          <Cars />
      </>
  );
}

export default App;
