import shoe from "../assets/shoe.png";
import shoeTwo from "../assets/shoeTwo.png";
import shoeThree from "../assets/shoeThree.png";
import calque from "../assets/calque.png";

const NewArrival = () => {
  return (
    <>
      <div className="w-full py-15 md:px-15 pl-7.5">
        <div className="w-full">
          <div className="flex justify-between gap-5 items-center pb-14">
            <div className="flex items-center gap-3">
              <h1 className="text-6xl font-[anton] font-normal">
                NEW ARRIVALS
              </h1>
              <div className="text-3xl flex gap-1.5 text-[#E3DADA]">
                <ion-icon name="chevron-back-circle-outline"></ion-icon>
                <ion-icon name="chevron-forward-circle-outline"></ion-icon>
              </div>
            </div>

            <a href="/" className="underline ">
              See all
            </a>
          </div>

          <div className=" w-full flex overflow-hidden gap-5 relative">
            <div className=" min-w-[300px] h-[404px]">
              <div className="w-[300px] h-[300px] bg-[#F6F6F6] pt-2.5 pl-2.5">
                <div className="w-[40px] h-[40px]">
                  <ion-icon
                    name="heart"
                    className=" text-[#F37373] bg-white rounded-full p-1 text-2xl"
                  ></ion-icon>
                </div>
                <div className="w-[300px] h-[180px] p-5 rotate-10">
                  <img src={shoe} alt="shoe" />
                </div>
              </div>
              <div className="pt-5">
                <h3 className="font-[inter] font-bold text-xl">
                  Air Jordan 1 Retro Low Voodoo
                </h3>
                <p className="font-[inter] font-normal text-xl text-[#838383]">
                  Men's shoes
                </p>
                <h4 className="font-[inter] font-[600] text-xl">379,99€</h4>
              </div>
            </div>
            <div className=" min-w-[300px] h-[404px]">
              <div className="w-[300px] h-[300px] bg-[#F6F6F6] pt-2.5 pl-2.5">
                <div className="w-[40px] h-[40px]">
                  <ion-icon
                    name="heart"
                    className=" text-[#F37373] bg-white rounded-full p-1 text-2xl"
                  ></ion-icon>
                </div>
                <div className="w-[300px] h-[180px] p-5 rotate-1">
                  <img src={shoeTwo} alt="shoe" />
                </div>
              </div>
              <div className="pt-5">
                <h3 className="font-[inter] font-bold text-xl">
                  Dunk Low Active Fuchsia
                </h3>
                <p className="font-[inter] font-normal text-xl text-[#838383]">
                  Women's shoes
                </p>
                <h4 className="font-[inter] font-[600] text-xl">169,99€</h4>
              </div>
            </div>
            <div className=" min-w-[300px] h-[404px]">
              <div className="w-[300px] h-[300px] bg-[#F6F6F6] pt-2.5 pl-2.5">
                <div className="w-[40px] h-[40px]">
                  <ion-icon
                    name="heart"
                    className=" text-[#F37373] bg-white rounded-full p-1 text-2xl"
                  ></ion-icon>
                </div>
                <div className="w-[100%] h-[180px] p-5 rotate-1">
                  <img src={shoeThree} alt="shoe" />
                </div>
              </div>
              <div className="pt-5">
                <h3 className="font-[inter] font-bold text-xl">
                  Dunk Low Black White
                </h3>
                <p className="font-[inter] font-normal text-xl text-[#838383]">
                  Unisex shoes
                </p>
                <h4 className="font-[inter] font-[600] text-xl">144,99€</h4>
              </div>
            </div>
            <div className=" min-w-[300px] h-[404px] ">
              <div className="w-[300px] h-[300px] bg-[#F6F6F6] pt-2.5 pl-2.5">
                <div className="w-[40px] h-[40px]">
                  <ion-icon
                    name="heart"
                    className=" text-[#F37373] bg-white rounded-full p-1 text-2xl"
                  ></ion-icon>
                </div>
                <div className="w-[300px] h-[300px] flex justify-center mt-1 rotate-1 absolute top-0">
                  <img src={calque} alt="shoe" />
                </div>
              </div>
              <div className="pt-5">
                <h3 className="font-[inter] font-bold text-xl">
                  Package Lightweight Jacket
                </h3>
                <p className="font-[inter] font-normal text-xl text-[#838383]">
                  Unisex jacket
                </p>
                <h4 className="font-[inter] font-[600] text-xl">104,99€</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
