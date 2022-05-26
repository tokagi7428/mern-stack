import Home from "../pages/home/Home";
import New from "../pages/new/New";
import Edit from "../pages/edit/Edit";
import Single from "../pages/single/Single";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
      <Routes>
        <Route path="/">
          <Route exact index element={<Home />} />
        </Route>
        <Route path="todo">
          <Route index path=":todoId" element={<Single />} />
          <Route path="create" element={<New />} />
          <Route path="edit/:todoId" element={<Edit />} />
        </Route>
      </Routes>
  );
}

export default App;