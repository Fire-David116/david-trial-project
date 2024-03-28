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
      <div className="bg-custom-color h-[120px] md:w-[1903px] md:h-[120px] font-InterRegular text-[20px] text-[#C86C00] flex justify-center items-center">
        Footer
    </div>
    </div>
  );
}
