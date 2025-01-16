import { LayoutMainPage } from "./layouts/pages";
import { UsersPage } from "./users/pages";

function App() {
  return (
    <>
      <LayoutMainPage page={UsersPage} />
    </>
  );
}

export default App;
