import Carousel from "../components/UI/Carousel";
import Categories from "../components/UI/Categories";

import Welcome from "../components/Home/Welcome";

export default function Home(props) {
  return (
    <div>
      <Carousel />
      <Welcome />
      <Categories />
    </div>
  );
}
