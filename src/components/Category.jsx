import { render } from "@testing-library/react";
import Dropdown from "./Dropdown";

const Category = (props) => {
    render()
    return (
<div className="bg-gray-200">
    <div className="container flex justify-around py-3 mx-auto text-sm font-semibold">
        <div className=" flex">
        <h1>Bakery</h1>
        <Dropdown/>
        </div>
        <div className=" flex">
        <h1>Fruit and Vegetables</h1>
        <Dropdown/>
        </div>
        <div className=" flex">
        <h1>Meat and Fish</h1><Dropdown/>
        </div>
        <div className=" flex">
        <h1>Drinks</h1><Dropdown/>
        </div>
        <div className=" flex">
        <h1>Kitchen</h1><Dropdown/>
        </div>
        <div className=" flex">
        <h1>Special Nutrition</h1><Dropdown/>
        </div>
        <div className=" flex">
        <h1>Baby</h1><Dropdown/>
        </div>
        <div className=" flex">
        <h1>Pharmacy</h1><Dropdown/>
        
        </div>
    </div>
</div>
    )
}

export default Category;