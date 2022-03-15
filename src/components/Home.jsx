import Layout from "./Layout";
import SideMenu from "./SideMenu";
import Card from "./Card";
import product from "../services/data/dataproduct";

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto mt-10 ">
        <div className="flex gap-8">
          <SideMenu />
          <div className="flex flex-col">
            <div className="flex flex-wrap gap-4">
              {product.map((item, index) => {
                return <Card items={item} />;
              })}
            </div>
            <div className="container w-full h-full mt-4 flex justify-center ">
              <button className="font-semibold text-lg inline-flex items-center self-center bg-lime-800 text-white w-max h-14 px-4 rounded-xl border border-lime-500 ">
                Show More Product
                <img
                  className="w-max h-max ml-2"
                  src="./images/arrowputih.png"
                ></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
