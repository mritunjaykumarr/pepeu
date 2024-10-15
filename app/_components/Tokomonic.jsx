import Image from "next/image";

import tokomonicBg from "@/public/tokoenmic.png";
import pieChart from "@/public/pie-chart.png";
import MyPieChart from "./Chart";
// top-[44rem] lg:top-[46rem]
function Tokomonic() {
  return (
    <section className="relative h-screen" id="tokenomics">
      <div className="relative  h-[100vh]">
        <Image
          src={tokomonicBg}
          alt="background"
          fill
          quality={50}
          palaceholder={"blur"}
          className="opacity-20"
        />
      </div>
      <div className="absolute top-0  flex  flex-col w-full h-screen ">
        <div className="text-center space-y-3 lg:mt-12 flex flex-col justify-center items-center">
          <h4 className="text-lglg:text-2xl font-bold text-[#e1a313]">
            About Our Token
          </h4>
          <h2 className="text-xl lg:text-4xl font-bold text-[#e1a313]">
            Our Token Info
          </h2>
          <p className="text-[12px] lg:text-lg text-[#eee] max-w-xl p-4 lg:p-0">
            The total supply of L2PEPE tokens will be allocated as follow
          </p>
        </div>
        <div className="grid lg:grid-cols-2 lg: mt-16 lg:p-12  p-6 justify-center justify-items-center">
          <div className="grid lg:grid-cols-2 gap-4">
            <ul className="space-y-6">
              <li className="flex gap-3">
                <p class="border-[7px] border-[#997dea] w-8 h-8 rounded-full"></p>
                <div>
                  <h6 className="text-white text-lg font-semibold">
                    Token Name
                  </h6>
                  <p class="text-sm text-[#ccc]">Pepelayer Token</p>
                </div>
              </li>
              <li className="flex gap-3">
                <p class="border-[7px] border-[#1eb8e0] w-8 h-8 rounded-full"></p>
                <div>
                  <h6 className="text-white text-lg font-semibold">
                    Ticker Symbol
                  </h6>
                  <p class="text-sm text-[#ccc]">L2PEPE</p>
                </div>
              </li>

              <li className="flex gap-3">
                <p class="border-[7px] border-[#2acd72] w-8 h-8 rounded-full"></p>
                <div>
                  <h6 className="text-white text-lg font-semibold">
                    Blockchain
                  </h6>
                  <p class="text-sm text-[#ccc]">SOLANA</p>
                </div>
              </li>
              {/* <li className="flex gap-3">
                <p class="border-[7px] border-[#7deada] w-8 h-8 rounded-full"></p>
                <div>
                  <h6 className="text-white text-lg font-semibold">1 Dollar</h6>
                  <p class="text-sm text-[#ccc]">16,000 L2PEPE</p>
                </div>
              </li> */}
              <li className="flex gap-3">
                <p class="border-[7px] border-[#997dea] w-8 h-8 rounded-full"></p>
                <div>
                  <h6 className="text-white text-lg font-semibold">
                    Total Supply
                  </h6>
                  <p class="text-sm text-[#ccc]">1,000,000,000 L2PEPE</p>
                </div>
              </li>
            </ul>
            <ul className="space-y-6">
              <li className="flex gap-3">
                <p class="border-[7px] border-[#e8c3b9] w-8 h-8 rounded-full"></p>
                <div>
                  <h6 className="text-white text-lg font-semibold">Presale</h6>
                  <p class="text-sm text-[#ccc]">20% Allocation ( 1B tokens)</p>
                </div>
              </li>
              <li className="flex gap-3">
                <p class="border-[7px] border-[#f5a67e] w-8 h-8 rounded-full"></p>
                <div>
                  <h6 className="text-white text-lg font-semibold">Airdrop</h6>
                  <p class="text-sm text-[#ccc]">20% (Distrubiton)</p>
                  <p class="text-sm text-[#ccc]">40% (Future Gamming reward)</p>
                </div>
              </li>
              {/* <li className="flex gap-3">
                <p class="border-[7px] border-[#94f57e] w-8 h-8 rounded-full"></p>
                <div>
                  <h6 className="text-white text-lg font-semibold">
                    Remaining
                  </h6>
                  <p class="text-sm text-[#ccc]">40% (Future Gamming reward)</p>
                </div>
              </li> */}
              <li className="flex gap-3">
                <p class="border-[7px] border-[#1eb8e0] w-8 h-8 rounded-full"></p>
                <div>
                  <h6 className="text-white text-lg font-semibold">Team</h6>
                  <p class="text-sm text-[#ccc]">10% Allocation (1B Tokens)</p>
                </div>
              </li>

              <li className="flex gap-3">
                <p class="border-[7px] border-[#e66392] w-8 h-8 rounded-full"></p>
                <div>
                  <h6 className="text-white text-lg font-semibold">
                    Liquidity Pool
                  </h6>
                  <p class="text-sm text-[#ccc]">10% Allocation (1B tokens)</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative lg:h-[60vh] h-[25vh] w-[60%] mt-6 lg:mt-0">
            {/* <Image
              src={pieChart}
              fill
              alt="pie chart"
              className="object-cover object-center"
              quality={90}
              palaceholder="blur"
            /> */}
            <MyPieChart />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokomonic;
