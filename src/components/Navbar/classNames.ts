import clx from "clsx";
export const NavbarStyles = {
  PCcontainer: clx(
    " container bg-transparent hidden  md:flex flex-row justify-between gap-2 py-2 "
  ),
  mobileContainer: clx("flexCol items-start p-2 md:hidden w-full h-full "),
  userIcon: clx(
    "border border-solid border-white block text-white rounded-full  p-1 cursor-pointer hover:bg-gray-40 Transition"
  ),
  overlay: clx(
    "fixed inset-0 w-full h-fulk bg-black/70  transition-all duration-300 ease-in-out z-10 pointer-events-none"
  ),
  sideDiv: clx(
    "fixed z-40 top-0 left-0 bg-white max-w-[300px] w-full rounded-tr-xl rounded-br-xl  min-h-screen transition-translate duration-500 ease-in-out  py-4 overflow-hidden"
  ),
  SideBarLinks: clx(
    "text-gray-90 capitalize font-semibold text-sm w-full hover:bg-gray-10 px-4  rounded-lg py-4 border-b border-solid border-gray-20 last:border-none"
  ),
};
