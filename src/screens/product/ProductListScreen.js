import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import data from "../../assets/product.json";
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Dialog from "../../components/Dialog";
import {  useRef } from "react";

export default function ProductListScreen() {
  const [products, setProducts] = useState(data);
  const navigate = useNavigate();

  function onCreatePress(e) {
    return navigate("/product-create");
  }
   
 
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    //Update
    nameProduct: ""
  });
  const idProductRef = useRef();
  const handleDialog = (message, isLoading, nameProduct) => {
    setDialog({
      message,
      isLoading,
      //Update
      nameProduct
    });
  };
 

  const handleDelete = (id) => {
    //Update
 
    const index = data.findIndex((p) => p.id === id);

    handleDialog("Are you sure you want to delete?", true, data[index].name);
    idProductRef.current = id;
  };


  const areUSureDelete = (choose) => {
    if (choose) {
      setProducts(products.filter((p) => p.id !== idProductRef.current));
      // products.splice(products.findIndex(({id}) => id === e), 1);
 
      handleDialog("", false);
    } else {
      handleDialog("", false);
    }
  };
  
  return (
    <>
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
                        // onClick={() => handleEdit(product.id)}
                        to={`/product-detail/${product.id}`}
                      >
                        Edit
                      </Link>
                    </div>
                    <div>
                      <span className="px-1"></span>
                      <Link
                       onClick={() => handleDelete(product.id)}
                        className="font-bold text-blue-500"
                        to={``}
                      >Delete</Link>
                    </div>
                  </td>
                </tr>
              </>
            ))}
            {dialog.isLoading && (
        <Dialog
          //Update
          nameProduct={dialog.id}
          onDialog={areUSureDelete}
          message={dialog.message}
        />
      )}
          </tbody>
        </table>
      </div>
    </>
  );
}
