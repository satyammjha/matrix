import React from "react";
import Header from "./Components/Header"
import Grid from  "./Components/Grid"

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex justify-center items-center flex-grow p-4">
        <Grid />
      </main>
    </div>
  );
};

export default App;
