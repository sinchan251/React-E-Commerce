import { CaretDownFilled } from "@ant-design/icons";

const Category = (props) => {
  return (
    <div className=" flex">
      <h1>{props.title}</h1>
      {props.icon && (
        <CaretDownFilled className="text-sm ml-0.5 text-gray-500 self-center" />
      )}
    </div>
  );
};

export default Category;
