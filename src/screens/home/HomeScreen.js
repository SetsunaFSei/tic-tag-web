import { Link, Outlet } from "react-router-dom"; 
import ControlIcon from "../../assets/control.png";
import PhotoIcon from "../../assets/photo.png";
import FolderIcon from "../../assets/folder.png";
import { useState } from "react";

export default function HomeScreen() {
  const [open, setOpen] = useState(true);
  const Menus = [    
    { title: "Claim", path: "claim" },
    { title: "Product", path: "product" },
    { title: "Logout ", path: "/", gap: true },
 
  ];

  return (
    <>
     <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-blue-600 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={ControlIcon}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={PhotoIcon}
            className={`w-24 h-24 cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >     
          Wesly Aioria       
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={FolderIcon} />
              <Link to={Menu.path}> {Menu.title} </Link>
            
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">        
        <Outlet />
      </div>
    </div>
 
    </>
  );
}
