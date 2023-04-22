import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Category, { categories, filterCategory } from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";

function Home() {

  return (
    <>
      <Header />
      <Banner image="favoritos" />
      <Container>

        {categories.map((category, index) =>
          <Category category={category} key={index} >
            <Carousel>
              {filterCategory(index).map((video) => <Card id={video.id} key={video.id} />)}
            </Carousel>
          </Category>
        )}

      </Container>
      <Footer />
    </>
  );
}

export default Home;
