import Banner from "./components/Banner";
import Card from "./components/Card";
import Category from "./components/Category";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/videos.json";

const categories = [
  "Geografia",
  "Como fazer e usar",
  "Astronomia e Geografia",
  "Climatologia, Meteorologia, Vegetação",
  "Geologia e Hidrografia"
]

function filterCategory(id) {
  return videos.filter( video => video.category === categories[id] )
}

function App() {

  return (
    <>
      <Header />
      <Banner image="favoritos" />
      <Container>

        <Category category={categories[0]}>
          { filterCategory(0).map((video) => <Card id={video.id} key={video.id} /> )}
        </Category>

        <Category category={categories[1]}>
          { filterCategory(1).map((video) => <Card id={video.id} key={video.id} /> )}
        </Category>

        <Category category={categories[2]}>
          { filterCategory(2).map((video) => <Card id={video.id} key={video.id} /> )}
        </Category>

        <Category category={categories[3]}>
          { filterCategory(3).map((video) => <Card id={video.id} key={video.id} /> )}
        </Category>

        <Category category={categories[4]}>
          { filterCategory(4).map((video) => <Card id={video.id} key={video.id} /> )}
        </Category>

      </Container>
      <Footer />
    </>
  );
}

export default App;
