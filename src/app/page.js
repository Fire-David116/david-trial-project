import Image from "next/image";
import TitleDiv from "./components/Title";
import Nav from "./components/Navbar";
import EnhancedTable from "./components/SortingTable";
import FooterDiv from "./components/footer";
export default function Home() {
  return (
    <div className="bg-black w-full h-full">
      <div>
        <Nav />
      </div>
      <div className="ml-[80px] h-[50%]">
        <TitleDiv />
      </div>
      <div className="bg-custom-color h-20 md:h-24 xl:h-32 font-InterRegular text-lg md:text-2xl text-[#C86C00] flex justify-center items-center">
        Footer
      </div>
    </div>
  );
}
