import "./App.css";
import { Route, Routes } from "react-router-dom";
import Test from "./pages/Test.tsx";

import SignUp from "./components/SignUp.tsx";
import SignIn from "./components/SignIn.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
