import { useNavigate } from "react-router-dom";

export default function ProductDetailScreen() {
  const navigate = useNavigate();
  function onSavePress(e) {
    return navigate("home/product");
  }
  function onBackPress(e) {
    return navigate("home/product");
  }

  return (
    <>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex flex-row ">
          <div className="flex-1">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="productCode"
              >
                Product Code
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="productcode"
                type="text"
                placeholder="Product Code"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="productName"
              >
                Product Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="productname"
                type="text"
                placeholder="Product Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="brand"
              >
                Brand
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="brand"
                type="text"
                placeholder="Brand"
              />
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="model"
                >
                  Model
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="model"
                  type="text"
                  placeholder="Model"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="model"
                >
                  Production Date
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="productiondate"
                  type="date"
                  placeholder="Production Date"
                />
              </div>
            </div>
          </div>

          <div className="flex-none w-80 px-8">
            <div className="w-48 h-48 ">
              <img
                src={
                  "https://t3.ftcdn.net/jpg/04/34/72/82/240_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
                }
                alt=""
              />{" "}
            </div>
            <div className="flex justify-center">
              <div className="mb-3 w-96">
                <label
                  for="formFile"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Default file input example
                </label>
                <input
                  className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="file"
                  id="formFile"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={onSavePress}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Save
          </button>
          <button
            onClick={onBackPress}
            className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Back
          </button>
        </div>
      </form>
    </>
  );
}