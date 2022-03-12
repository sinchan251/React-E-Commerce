
import {BintangFull, BintangKosong} from './Bintang';
   
const SideMenu =()=>{
    
    return(
        <div className="flex flex-col  w-1/3">
        {/* ini Categories */}
        <div className="container mb-16 pr-6">
          <div className=" text-2xl mb-5 font-bold">Categories</div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-black ">Bolu</h1>
              <h1 className="text-lime-700  bg-lime-50 rounded-xl px-2">
                320
              </h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-black ">Mie</h1>
              <h1 className="text-lime-700  bg-lime-50 rounded-xl px-2">
                112
              </h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-black ">Pizza</h1>
              <h1 className="text-lime-700  bg-lime-50 rounded-xl px-2">
                32
              </h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-black ">Desert</h1>
              <h1 className="text-lime-700  bg-lime-50 rounded-xl px-2">
                48
              </h1>
            </div>
          </div>
        </div>
        {/* ini Order By */}
        <div className="container mb-16 pr-6">
          <div className=" text-2xl mb-5 font-bold">Order By</div>
          <div className="flex flex-col gap-3">
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="w-6 h-6 rounded accent-lime-600 "
              />
              <span class="ml-2">Termahal</span>
            </label>
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="w-6 h-6 rounded accent-lime-600 " checked
              />
              <span class="ml-2">Terlaris</span>
            </label>
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="w-6 h-6 rounded accent-lime-600 "
                checked
              />
              <span class="ml-2">Termahal</span>
            </label>
          </div>
        </div>
        {/* Rating */}
        <div className="container mb-16 pr-6">
          <div className=" text-2xl mb-5 font-bold">Rating</div>
          <div className="flex flex-col gap-3">
            <label class="inline-flex items-center gap-2">
              <input
                type="checkbox"
                class="w-6 h-6 rounded accent-lime-600 "
              />
              <BintangFull/>
              <BintangFull/>
              <BintangFull/>
              <BintangFull/>
              <BintangFull/>
              
            </label>
            <label class="inline-flex items-center gap-2">
              <input
                type="checkbox"
                class="w-6 h-6 rounded accent-lime-600"
              />
               <BintangFull/> 
               <BintangFull/> 
               <BintangFull/> 
               <BintangFull/>
              <BintangKosong/>
            </label>
            <label class="inline-flex items-center gap-2">
              <input
                type="checkbox"
                class="w-6 h-6 rounded accent-lime-600"
              />
              <BintangFull/> 
               <BintangFull/> 
               <BintangFull/>                
              <BintangKosong/>
              <BintangKosong/>
            </label>
            <label class="inline-flex items-center gap-2">
              <input
                type="checkbox"
                class="w-6 h-6 rounded accent-lime-600"
              />
              <BintangFull/> 
               <BintangFull/> 
               <BintangKosong/>
               <BintangKosong/>
              <BintangKosong/>
            </label>
            <label class="inline-flex items-center gap-2">
              <input
                type="checkbox"
                class="w-6 h-6 rounded accent-lime-600"
              />
              <BintangFull/> 
              <BintangKosong/>
              <BintangKosong/>
              <BintangKosong/>
              <BintangKosong/>
            </label>
          </div>
        </div>
        {/* Price */}
        <div className="container mb-16 pr-6">
          <div className=" text-2xl mb-5 font-bold">Price</div>
          <div className="flex flex-col gap-2">          
          <img src='images/slider.png'></img>
          <div className='flex justify-between gap-10'>
              <input type="text" readOnly placeholder='0' className='w-2/4 h-10 p-4 bg-gray-100 rounded-xl border' />
              <input type="text" readOnly placeholder='000' className='w-2/4 h-10 p-4 bg-gray-100 rounded-xl border' />
          </div>
          </div>        
        </div>        
        {/* ini apply and Reser */}

        <div className="container mb-16 pr-6">          

          <div className='flex gap-6'>
              <button className='bg-lime-800 text-white w-20 h-10 rounded-xl border border-lime-900 font-bold' >Apply</button>
              <button type="reset" className='font-bold text-gray-400'>reset</button>
          </div>             
        </div>       

      </div>
    )
}

export default SideMenu;