import Image from "next/image";
import { IconName } from "react-icons/hi2";
import { HiOutlinePencilSquare } from "react-icons/hi2";

const USER_IMG =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VVNFUiUyMElNQUdFfGVufDB8fDB8fHww";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-2 border-b-[2px] border-[#80008038]">
      <img src="./images/connect.jpg" width={70} height={50} className="rounded-md" />
      <div className="flex gap-5 items-center ">
        <button className="bg-black p-2 px-3 text-white rounded-full flex items-center gap-2"><span className="hidden md:block">Create Post</span><HiOutlinePencilSquare className="md:hidden" /></button>
        <button className="bg-white p-2 px-3 text-gray-500 rounded-full">Sign In</button>
        <Image
        src={USER_IMG}
        width={30}
        height={30}
        className="rounded-full"
        alt="profile-image"
      />
      </div>
      
    </div>
  );
};

export default Header;
