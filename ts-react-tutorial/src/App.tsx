import React from "react";
import Greetings from "./components/Greetings";
import Counter from "./components/Counter";
import MyForm from "./components/MyForm";
import ReducerSample from "./components/ReducerSample";
import { SampleProvider } from "./components/SampleContext";

const App: React.FC = () => {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <SampleProvider>
      <ReducerSample />
    </SampleProvider>
  );
};

export default App;
