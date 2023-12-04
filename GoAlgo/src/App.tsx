import { Route, Routes } from "react-router-dom";
import Test from "./pages/Test.tsx";

import SignUp from "./components/SignUp.tsx";
import SignIn from "./components/SignIn.tsx";
import Main from "./pages/Main.tsx";
import RequireAuth from "./components/RequireAuth.tsx";
import Profile from "./pages/Profile.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route element={<RequireAuth />}>
        <Route path="/profile" element={<Profile />} />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
