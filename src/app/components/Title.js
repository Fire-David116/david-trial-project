"use client"
import bigcoin from "./style/coin.png";
import Image from "next/image"
import arrowImg from "./style/svgs/arrow.svg";
import frax from "./style/svgs/frax.svg"
import trending from "./style/svgs/trending.svg"
import eth from "./style/svgs/eth.svg";
import wbtc from "./style/svgs/wbtc.svg";
import pepe from "./style/svgs/pepe.svg";
import mkr from "./style/svgs/mkr.svg";
import ChartG from "./Chart";
import EnhancedTable from "./SortingTable";
import FooterDiv from "./footer";
import Activity from "./Activity";
const TitleDiv = () => {
    return (
        <div class="h-[3000px] md:h-[995px] bg-black  ">
            <div className="flex grid grid-cols-2 gap-x-6 mt-10 sm:mt-16 bg-black">
                <div class="w-full col-span-2 grid-rows-2 sm:col-span-1 relative">
                    <div class="flex bg-custom-color rounded-[32px] h-[63%] md:h-[65%] ml-[-70px] mr-[8px] md:ml-0">
                        <div class="w-3/4">
                            <a className="block font-bold text-[16px] md:text-[24px] text-white font-[HankenGroteskRegular] pt-4 md:pt-2 md:pt-6 pl-6 ">
                                My Balance
                            </a>
                            <a className="block font-bold text-[48px] md:text-[64px] text-white font-[HankenGroteskRegular] pt-2 md:pt-6 pl-6">
                                $25,350.52
                            </a>
                            <b className="block text-[11px] md:text-[16px] text-white font-[HankenGroteskRegular] w-[300px] md:w-[500px] pt-[8px] md:pt-[24px] pl-[24px]">
                                Grow your portfolio{" "}
                                <a href="flex your_other_link_url" className="text-[#C86C00] underline font-[HankenGroteskRegular]">
                                    check latest listed coins

                                    <div
                                        style={{ width: "13px", height: "13px" }}
                                        className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-1"
                                    >
                                        <Image
                                            src={arrowImg}
                                            alt="Arrow"
                                            className="w-2 h-2 md:w-24 md:h-auto mt-0.7"
                                            sizes="13vw"
                                            priority
                                        />
                                    </div>
                                </a>
                            </b>
                            <div className="items-center pl-6 pt-2">
                                <a className="block text-[6px] md:text-[12px] text-white font-[HankenGroteskRegular] opacity-50">
                                    *All values represented in USD
                                </a>
                            </div>

                        </div>
                        <div class="w-2/4">
                            <Image
                                src={bigcoin}
                                alt="Arrow"
                                className="w-[150px] h-auto md:w-[200px] md:h-auto mt-8 md:mt-6 overflow-x-hidden"
                                priority
                            />
                        </div>

                    </div>
                    <a className="w-full inline-block md:text-2xl text-white mt-[32px] md:mt-[50px] mb-3 ml-[-70px] md:ml-0 mr-[30px]">
                        Your top movers
                    </a>
                    <div className="h-[40%] flex overflow-x-hidden ml-[-62px] md:ml-[0px] md:w-[96%]">
                        <div className="w-[210px] h-[70px] flex-none bg-[#190F01] rounded-lg flex-shrink-0 mr-5 flex animate-slide">
                            <div className="w-1/3 flex-none">
                                <div
                                    style={{ width: "55px", height: "55px" }}
                                    className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2"
                                >
                                    <Image
                                        src={eth}
                                        alt="Arrow"
                                        className="w-full h-auto"
                                        sizes="20vw"
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="w-2/3 flex flex-col">
                                <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg mt-2">ETH</div>
                                <div className="h-1/2 flex items-center  text-white ml-2 mb-3">$3,500<span className="ml-7 text-base text-[#4cd10d]">5%</span>
                                    <div>
                                        <Image
                                            src={trending}
                                            alt="Arrow"
                                            sizes="20vw"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[210px] h-[70px] flex-none bg-[#190F01] rounded-lg flex-shrink-0 mr-5 flex animate-slide">
                            <div className="w-1/3 flex-none">
                                <div
                                    style={{ width: "55px", height: "55px" }}
                                    className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2"
                                >
                                    <Image
                                        src={wbtc}
                                        alt="Arrow"
                                        className="w-full h-auto"
                                        sizes="20vw"
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="w-2/3 flex flex-col">
                                <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg mt-2">WBTC</div>
                                <div className="h-1/2 flex items-center  text-white ml-2 mb-3">$67,500<span className="ml-7 text-base text-[#4cd10d]">5%</span>
                                    <div>
                                        <Image
                                            src={trending}
                                            alt="Arrow"
                                            sizes="20vw"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[210px] h-[70px] flex-none bg-[#190F01] rounded-lg flex-shrink-0 mr-5 flex animate-slide">
                            <div className="w-1/3 flex-none">
                                <div
                                    style={{ width: "55px", height: "55px" }}
                                    className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2"
                                >
                                    <Image
                                        src={frax}
                                        alt="Arrow"
                                        className="w-full h-auto"
                                        sizes="20vw"
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="w-2/3 flex flex-col">
                                <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg mt-2">FRAX</div>
                                <div className="h-1/2 flex items-center  text-white ml-2 mb-3">$1.01<span className="ml-7 text-base text-[#4cd10d]">5%</span>
                                    <div>
                                        <Image
                                            src={trending}
                                            alt="Arrow"
                                            sizes="20vw"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[210px] h-[70px] flex-none bg-[#190F01] rounded-lg flex-shrink-0 mr-5 flex animate-slide">
                            <div className="w-1/3 flex-none">
                                <div
                                    style={{ width: "55px", height: "55px" }}
                                    className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2"
                                >
                                    <Image
                                        src={pepe}
                                        alt="Arrow"
                                        className="w-full h-auto"
                                        sizes="20vw"
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="w-2/3 flex flex-col">
                                <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg mt-2">PEPE</div>
                                <div className="h-1/2 flex items-center  text-white ml-2 mb-3"><i class="fas fa-chevron-left"></i>$0.001<span className="ml-7 text-base text-[#4cd10d]">5%</span>
                                    <div>
                                        <Image
                                            src={trending}
                                            alt="Arrow"
                                            sizes="20vw"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[210px] h-[70px] flex-none bg-[#190F01] rounded-lg flex-shrink-0 mr-5 flex animate-slide">
                            <div className="w-1/3 flex-none">
                                <div
                                    style={{ width: "55px", height: "55px" }}
                                    className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2"
                                >
                                    <Image
                                        src={mkr}
                                        alt="Arrow"
                                        className="w-full h-auto"
                                        sizes="20vw"
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="w-2/3 flex flex-col">
                                <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg mt-2">MKR</div>
                                <div className="h-1/2 flex items-center  text-white ml-2 mb-3">$3,050<span className="ml-7 text-base text-[#4cd10d]">5%</span>
                                    <div>
                                        <Image
                                            src={trending}
                                            alt="Arrow"
                                            sizes="20vw"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>
                <div className="w-full h-full col-span-2 sm:col-span-1 relative ml-[-70px] md:ml-[0px] md:col-span-1 w-[95%]">
                    <div className="flex items-center justify-between mb-[32px] mt-[32px] md:mt-[-20px] w-[123%] md:w-[100%]">
                        <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-white mt-[10px]">
                            PnL Analysis
                        </h2>
                        <p className="text-base font-bold text-[#4cd10d] bg-[#102407] mt-[20px] rounded-2xl px-2 py-1 whitespace-nowrap">
                            This&nbsp;Month&nbsp;5%&nbsp;
                            <span className="inline-block bg-[#102407] w-6">
                                <Image
                                    src={trending}
                                    alt="Arrow"
                                    sizes="20vw"
                                    priority
                                />
                            </span>
                        </p>
                    </div>
                    <div className="w-[124%] md:w-[100%]">
                        <ChartG />
                    </div>
                </div>
                <div className="w-[93%] md:w-[96%] ml-[7px] col-span-2 sm:col-span-1">
                    <a className="block col-span-2 sm:col-span-1 font-bold text-[32px] md:text-[32px] text-white font-[HankenGroteskRegular] mt-[28px] md:mt-[0px] ml-[-70px] md:ml-[0px] md:pt-8">
                        Your Holdings
                    </a>
                    <div className="ml-[-70px] md:ml-[0px] mt-[32px] md:mt-0 border-black">
                        <EnhancedTable />
                    </div>
                </div>
                <div className="w-[100%] h-full col-span-2 sm:col-span-1 ml-[-32px]">
                    <h2 className="w-full inline-block font-bold capitalize text-3xl md:text-[32px] text-white mb-[32px] md:mt-[48px] ml-[-32px] md:ml-[32px]">
                        Recent Activity
                    </h2>
                    <div className="ml-[-36px] md:ml-[32px]">
                        <Activity />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default TitleDiv
