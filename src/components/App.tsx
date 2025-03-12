import * as cls from "./App.style.module.scss";
import SeminarsList from "./SeminarsList";

const App = () => {
  return (
    <main className={cls.main}>
      <SeminarsList />
    </main>
  );
};

export default App;
