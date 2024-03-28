import Image from "next/image";
import TitleDiv from "./components/Title";
import Nav from "./components/Navbar";
import EnhancedTable from "./components/SortingTable";
export default function Home() {
  return (
    <div className="bg-black">
      <div>
        <Nav />
      </div>
      <div className="ml-[80px] h-[50%]">
        <TitleDiv />
      </div>
    </div>
  );
}
