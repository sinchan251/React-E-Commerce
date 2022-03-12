import "../App.css";

const Card =(props)=>(
    <div className="container border rounded-xl h-max w-max p-4">
        <div className="text-lime-700 bg-lime-50 rounded-xl px-2 w-max absolute mt-2 ml-2">{props.disc}</div>
        <img src={props.gambar} alt="" className="w-60 h-40 mb-5" />
        <div className="text-black font-semibold text-xl mb-1">{props.nama}</div>
        <div className="text-gray-500 mb-3 ">{props.keterangan}</div>
        <div className="flex justify-between">
            <div className="flex flex-col">
                <div className="text-black font-semibold text-xl">{props.harga}</div>
                <div className="text-gray-500 font-semibold text-md  line-through">{props.hargadisc}</div>
            </div>
            <button className='bg-lime-800 text-white w-20 h-12 rounded-xl border border-lime-900 font-bold'>Buy Now</button>
        </div>
    </div>
)

export default Card;