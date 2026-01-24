import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";

import Link from "next/link";
import Image from "next/image";

function Footer() {
  const toDay = new Date();
  const currYear = toDay.getFullYear();
  console.log(currYear);
  return (
    <div className="   bg-[#7b1fa2]">
      <div className=" pb-5 lg:hidden flex pt-[1rem]">
        <div className="w-32 h-[2px] bg-[white] mx-auto my-6"></div>
        <div>
          <div className="flex justify-center mt-4">
            <Link
              href="https://www.facebook.com/profile.php?id=100064486940960"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:scale-110 transition-transform"
            >
              <FaFacebook className="text-[#e1bee7] hover:text-blue-600 w-5 h-5" />
            </Link>

            <Link
              href="https://www.youtube.com/channel/UCO-aZxM0MpXDTo5dWZXBxNw"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:scale-110 transition-transform"
            >
              <FaYoutube className="text-[#e1bee7] hover:text-red-600 w-5 h-5" />
            </Link>

            <Link
              href="https://www.tiktok.com/@sir_sober_official"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:scale-110 transition-transform"
            >
              <FaTiktok className="text-[#e1bee7] hover:text-black w-5 h-5" />
            </Link>
          </div>

          <div className="text-[white] text-center">
            <p>
              Developed by:
              <br /> Emmanuel Appiah
            </p>
            <p>CopyRight &copy; {currYear} </p>
          </div>
        </div>
        <div className="w-32 h-[2px] bg-[white] mx-auto my-6"></div>
      </div>
      {/* larger view port */}
      <div className=" lg:mx-[10rem] justify-center  hidden lg:flex">
        <div className="pt-8 pb-4 gap-20 flex text-[#ded3f3]">
          <div>
            <div className="flex py-4 items-center">
              <span>
                <IoIosContact className="text-[#F8BBD0] w-8 h-8" />
              </span>
              <h1 className="pl-3 text-2xl text-[#FFFFFF]">Contact</h1>
            </div>
            <div className=" pb-2 flex">
              <span>
                <IoLocationOutline className="text-[#e1bee7] w-6 h-6" />
              </span>
              <p className="pl-4 ">Justus Von-Liebig Weg 6a, 18105, Germany</p>
            </div>

            <div className="pb-2 flex">
              <span>
                <FiPhoneCall className="text-[#e1bee7] w-6 h-6" />
              </span>
              <p className="pl-4">+49 173 9406448</p>
            </div>

            <div className="flex">
              <span>
                <MdOutlineMail className="text-[#e1bee7] w-6 h-6" />
              </span>
              <p className="pl-4">mr.appiah@gmx.de</p>
            </div>
          </div>

          <div>
            <div className="flex py-4 items-center">
              <span>
                <IoShareSocialSharp className="text-[#F8BBD0] w-8 h-8" />
              </span>
              <h1 className="pl-3 text-2xl text-[#FFFFFF]">Social Media</h1>
            </div>

            <Link
              href="https://www.facebook.com/profile.php?id=100064486940960"
              target="_blank"
              rel=""
              className="pb-2 flex hover:scale-110 transition-transform"
            >
              <FaFacebook className="text-[#e1bee7] hover:text-blue-600 w-6 h-6" />
              <span className="pl-4">Facebook</span>
            </Link>

            <Link
              href="https://www.youtube.com/channel/UCO-aZxM0MpXDTo5dWZXBxNw"
              target="_blank"
              rel=""
              className="pb-2 flex hover:scale-110 transition-transform"
            >
              <FaYoutube className="text-[#e1bee7] hover:text-red-600 w-6 h-6" />
              <span className="pl-4">YouTube</span>
            </Link>

            <Link
              href="https://www.tiktok.com/@sir_sober_official"
              target="_blank"
              rel=""
              className="flex hover:scale-110 transition-transform"
            >
              <FaTiktok className="text-[#e1bee7] hover:text-black w-6 h-6" />
              <span className="pl-4">Tiktok</span>
            </Link>
          </div>
          <div>
            <div className="flex items-center py-4">
              <span>
                <FaLink className="text-[#F8BBD0] w-8 h-8" />
              </span>
              <h1 className="pl-3 text-2xl text-[#FFFFFF]">Links</h1>
            </div>
            <div className="flex flex-col">
              <Link href="/" className="pb-2 hover:text-gray-200">
                Home
              </Link>
              <Link href="/about" className="pb-2 hover:text-gray-200">
                About
              </Link>
              <Link href="/contact" className="hover:text-gray-200 ">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <div className="flex py-4 items-center">
              <span>
                <FcApproval className="w-10 h-10" />
              </span>
              <h1 className="pl-3 text-2xl text-[#FFFFFF]">TWW Bible App</h1>
            </div>
            <Image src="/app.PNG" className="rounded" width={100} height={50} />
          </div>
        </div>
      </div>
      <div className="lg:mx-[10rem] hidden lg:block">
        <hr className=" min-w-full border  border-gray-400" />
        <div className="flex justify-between px-[9rem] pt-4 pb-8 text-[#ded3f3]">
          <div>
            <p>CopyRight &copy; {currYear} </p>
          </div>
          <div>
            <p>
              Developed by:
              <span className="text-[#f06292]">Emmanuel Appiah</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
