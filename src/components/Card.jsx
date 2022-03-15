import "../App.css";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

const Card = (props) => {
  const item = props.items;
  const discount = item.harga - (item.harga * item.disc) / 100;
  return (
    <div className="container border rounded-xl h-max w-max p-4">
      {item.disc > 0 && (
        <div className="text-lime-700 bg-lime-50 rounded-xl px-2 w-max absolute mt-2 ml-2">
          {item.disc}%
        </div>
      )}
      <Link to={item.nama}>
        <img src={item.image} alt="" className="w-60 h-40 mb-5" />
      </Link>
      <Link to={item.nama}>
        <div className="text-black font-semibold text-xl mb-1">{item.nama}</div>
      </Link>
      <div className="text-gray-500 mb-3 ">{item.keterangan}</div>
      <div className="flex justify-between">
        <div className="flex flex-col justify-center ">
          <div className="text-black font-semibold text-xl">
            <NumberFormat
              decimalSeparator=","
              thousandSeparator={"."}
              value={discount}
              prefix={"Rp "}
              displayType="text"
            />
          </div>
          {item.disc > 0 && (
            <div className="text-gray-500 font-semibold text-md  line-through">
              <NumberFormat
                decimalSeparator=","
                thousandSeparator={"."}
                value={item.harga}
                prefix={"Rp "}
                displayType="text"
              />
            </div>
          )}
        </div>
        <button className="bg-lime-800 text-white w-20 h-12 rounded-xl border border-lime-900 font-bold">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card;
