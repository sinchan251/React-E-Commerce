import logo from "./logo.svg";
import Category from "./components/Category";
import SideMenu from "./components/SideMenu";
import Card from "./components/Card";

function App() {
  return (
    <div className=" mx-auto container w-4/5">
      <div className=":container mx-auto ">
        <div className="flex  justify-between border-b text-sm pb-2 my-5">
          <div className="data  flex gap-6">
            <a href="#" className="text-lime-500">
              Chat with us
            </a>
            <h1>+62895 6002 82374</h1>
            <h1>info@meukatShop.com</h1>
          </div>
          <div className="menu ">
            <ul className="flex gap-10 text-lime-500">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between  py-6">
          <h1 className="text-2xl font-semibold -mr-20">Meukat Shop</h1>
          <div className="flex w-9/12 justify-center ">
            <input
              type="text"
              placeholder="Search Here.."
              className="pl-5 py-3 w-3/4 h-9 border-solid border-2 caret-pink-500 rounded-xl hover:rounded-full bg-gray-100 "
            ></input>
            <img
              src="images/search-icon.png"
              className="w-3 h-3 -ml-8 my-auto "
              alt="search"
            />
          </div>
          <div className="flex gap-9">
            <img
              src="/images/user-icon.png"
              className="w-5 h-5 my-auto"
              alt="user"
            ></img>
            <div className="relative self-center">
              <img
                src="images/cart-icon.png"
                className="w-5 h-5 my-auto "
                alt="keranjang"
              ></img>
              <div className="absolute -mt-2 -ml-1  bg-orange-600 rounded-full text-white w-3 h-3 flex items-center justify-center">
                4
              </div>
            </div>
          </div>
        </div>
      </div>

      <Category />

      <div className="container mx-auto mt-10 ">
        <div className="flex gap-8">
          <SideMenu />
          <div className="flex flex-col">
            <div className="flex flex-wrap gap-4">
              <Card
                gambar="../images/bolususun.png"
                nama="Bolu Susun"
                keterangan="Disusun dengan penuh kenangan"
                harga="36.000"
                hargadisc="40.000"
                disc="-36%"
              />
              <Card
                gambar="../images/mieaceh.png"
                nama="Mie Aceh"
                keterangan="Rasanya Menusuk Jiwa dan Raga"
                harga="26.000"
                hargadisc="30.000"
                disc="-36%"
              />
              <Card
                gambar="../images/bolulapis.png"
                nama="Bolu Lapis"
                keterangan="Lapis legit di setiap sentuhan"
                harga="36.000"
              />
              <Card
                gambar="../images/Donat.png"
                nama="Rasa Donat"
                keterangan="Disusun dengan penuh kenangan"
                harga="15.000"
              />
              <Card
                gambar="../images/pizza.png"
                nama="Pizza Huut"
                keterangan="Potongan Penuh Nikmat"
                harga="30.000"
                hargadisc="30.000"
                disc="-36%"
              />
              <Card
                gambar="../images/telur.png"
                nama="Mata Sapi"
                keterangan="Penuh Mata Mata"
                harga="12.000"
              />
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

      <div className="container  w-full h-full my-auto px-4 pt-8">
        <div className="mx-auto container flex gap-4 justify-between border-t py-4">
          <div className="w-32 h-full flex flex-col gap-2">
            <div className="text-lg font-bold mb-1">Get in Touch</div>
            <div className="text-lime-700 ">About Us</div>
            <div className="text-lime-700 ">Careers</div>
            <div className="text-lime-700 ">Press Release</div>
            <div className="text-lime-700 ">Blog</div>
          </div>
          <div className=" h-full flex flex-col gap-2">
            <div className="text-lg font-bold mb-1">Connections</div>
            <div className="text-lime-700 ">
              <a href="#">Facebook</a>
            </div>
            <div className="text-lime-700 ">
              <a href="#">Twitter</a>
            </div>
            <div className="text-lime-700 ">
              <a href="https://www.instagram.com/farhanulk/">Instagram</a>
            </div>
            <div className="text-lime-700 ">
              <a href="https://www.youtube.com/channel/UC9wbnqD5-rLoPKoaNMkPvaw">
                Youtube
              </a>
            </div>
            <div className="text-lime-700 ">
              <a href="https://www.linkedin.com/in/farhanul-khair-43b67321a/">
                Linkedln
              </a>
            </div>
          </div>
          <div className="h-full flex flex-col gap-2">
            <div className="text-lg font-bold mb-1">Earnings</div>
            <div className="text-lime-700 ">Become an Affilate</div>
            <div className="text-lime-700 ">Advertise your product</div>
            <div className="text-lime-700 ">Sell on Market</div>
          </div>
          <div className="h-full flex flex-col gap-2">
            <div className="text-lg font-bold mb-1">Account</div>
            <div className="text-lime-700 ">Your Account</div>
            <div className="text-lime-700 ">Returns Centre</div>
            <div className="text-lime-700 ">100% Purchase Protection</div>
            <div className="text-lime-700 ">Chat with us</div>
            <div className="text-lime-700 ">Help</div>
          </div>
        </div>
      </div>

      <div className="pt-24 pb-10 text-sm">Copyright © 2020 petrbilek.com</div>
    </div>
  );
}

export default App;
