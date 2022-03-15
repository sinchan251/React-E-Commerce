import { useParams } from "react-router-dom";
import product from "../services/data/dataproduct";
import Card from "./Card";
import Layout from "./Layout";

const Detail = () => {
  const params = useParams();
  const dataitem = product.filter(
    (element) => element.nama === params.productName
  );
  return (
    <Layout>
      <Card items={dataitem[0]} />
    </Layout>
  );
};

export default Detail;
