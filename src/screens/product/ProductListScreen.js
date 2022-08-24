import { Link, Outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import data from "../../assets/product.json";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import Dialog from "../../components/Dialog";
import { useRef } from "react";

export default function ProductListScreen() {
  const [products, setProducts] = useState(data);
  const navigate = useNavigate();
  let [num, setNum] = useState(1);
  let [cur, setCur] = useState(1);

  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
  ];
  function Next() {
    setNum(++num);
  }
  function back() {
    num > 1 && setNum(--num);
  }


  function onCreatePress(e) {
    return navigate("product-create");
  }

  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    nameProduct: "",
  });
  const idProductRef = useRef();
  const handleDialog = (message, isLoading, nameProduct) => {
   
    setDialog({
      message,
      isLoading,
      nameProduct,
    });
  };

  const handleDelete = (product) => {
    const index = data.findIndex((p) => p.id === product.id);    
    handleDialog("Are you sure you want to delete?", true, product.productName);
    idProductRef.current = product.id;
  };

  const areUSureDelete = (choose) => {
    if (choose) {
      setProducts(products.filter((p) => p.id !== idProductRef.current));
      handleDialog("", false);
    } else {
      handleDialog("", false);
    }
  };

  return (
    <>
      <div className="w-full ">
      <form className="py-4">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Product Name, Status..."
              />
              <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
       
        <div className="py-3 px-4">
          <button
            onClick={() => onCreatePress()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            New
          </button>
        </div>

        <div className="px-4  overflow-auto rounded-lg shadow hidden md:block">
          <table className="w-full ">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className=" p-3 text-sm font-semibold tracking-wide text-center">
                  Id
                </th>
                <th className=" p-3 text-sm font-semibold tracking-wide text-center">
                  Image
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-center">
                  Product Code
                </th>
                <th className=" p-3 text-sm font-semibold tracking-wide text-center">
                  Product Name
                </th>
                <th className=" p-3 text-sm font-semibold tracking-wide text-center">
                  Brand
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-center">
                  Model
                </th>
                <th className=" p-3 text-sm font-semibold tracking-wide text-center">
                  Serial Number
                </th>
                <th className=" p-3 text-sm font-semibold tracking-wide text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((product) => (
                <>
                  <tr className="bg-white ">
                    <td className="p3 py-8 text-sm text-gray-700 whitespace-nowrap ">
                      {product.id}
                    </td>
                    <td className="p3 text-sm text-gray-700 whitespace-nowrap ">
                      <div className="w-24 h-24">
                        <img src={product.imageFile} alt="" />{" "}
                      </div>
                    </td>
                    <td className="p3 text-sm text-gray-700 whitespace-nowrap ">
                      {product.productCode}
                    </td>
                    <td className="p3 text-sm text-gray-700 whitespace-nowrap ">
                      {product.productName}
                    </td>
                    <td className="p3 text-sm text-gray-700 whitespace-nowrap ">
                      {product.brand}
                    </td>
                    <td className="p3 text-sm text-gray-700 whitespace-nowrap ">
                      {product.model}
                    </td>
                    <td className="p3 text-sm text-gray-700 whitespace-nowrap ">
                      {product.serialNumber}
                    </td>

                    <td className="p3 h-32 text-sm text-gray-700 text-center items-center flex justify-evenly">
                      <div>
                        <Link
                          className="font-bold text-blue-500"
                          to={`product-detail/${product.id}`}
                        >
                          Edit
                        </Link>
                      </div>
                      <div>
                        <span className="px-1"></span>
                        <Link
                          onClick={() => handleDelete(product)}
                          className="font-bold text-blue-500"
                          to={``}
                        >
                          Delete
                        </Link>
                      </div>
                    </td>
                  </tr>
                </>
              ))}
              {dialog.isLoading && (
                <Dialog
                  nameProduct={dialog.nameProduct}
                  onDialog={areUSureDelete}
                  message={dialog.message}
                />
              )}
            </tbody>
          </table>
          
        </div>
        <div className="flex justify-center bg-white rounded-lg font-[Poppins]">
            <button
              onClick={back}
              className="h-12 border-2 border-r-0 border-white-600 bg-white text-black
               px-4 rounded-l-lg hover:bg-blue-600 hover:text-white"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
            {pages.map((pg, i) => (
              <button
                key={i}
                onClick={() => setCur(pg.page)}
                className={`h-12 border-2 border-r-0 border-indigo-600 bg-white text-black
               hover:bg-blue-600 hover:text-white
               w-12 ${cur === pg.page && "bg-blue-600 text-black"}`}
              >
                {pg.page}
              </button>
            ))}
            <button
              onClick={Next}
              className="h-12 border-2  border-blue-600 bg-white text-black
               px-4 rounded-r-lg hover:bg-blue-600 hover:text-white"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
      </div>
      <Outlet />
    </>
  );
}
