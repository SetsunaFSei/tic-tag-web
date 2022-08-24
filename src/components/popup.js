const PopUp = ({ onDialog, claim }) => {
  return (
    <div className="fixed top-1/2 left-1/2" onClick={() => onDialog(false)}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex p-8 bg-blue-600  rounded-md items-center origin-center   justify-center flex-col "
      >
        <h1>{claim}</h1>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="productiondate"
          type="date"
          placeholder="Production Date"
        />
        <div className="h-2"></div>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="reason"
          type="text"
          placeholder="Reason"
        />

        <div className="h-2"></div>
        <div className="flex ">
          <div className="w-full px-2">            
            <button
              onClick={() => onDialog(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Yes
            </button>
          </div>
          <div className="w-full px-2">
           
            <button
              onClick={() => onDialog(false)}
              className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopUp;
