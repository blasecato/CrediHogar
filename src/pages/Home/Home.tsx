import Layout from "@/components/organisms/layout/Layout";
import Banner from "@/components/organisms/Banner/Banner";
import About from "@/components/organisms/About/About";
import Branches from "@/components/organisms/branches/Branches";
import Questions from "@/components/organisms/Questions/Questions";

const Home = () => {
  return (
    <Layout>
      <div>
        <Banner />
        <About />
        <Branches />
        <Questions />
      </div>
    </Layout>
  );
};

export default Home;
