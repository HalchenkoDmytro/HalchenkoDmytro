import Aside from "./Aside";
import Content from "./Content";

const Main = () => {
  return (
    <div className="main">
    <Aside />
    <div className="main_content">
      <p className="main__text">main</p>
      <Content />
    </div>

  </div>
  );
}

export default Main;