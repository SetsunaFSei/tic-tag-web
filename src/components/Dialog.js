const Dialog=({ message, onDialog, nameProduct }) =>{
    return (
      
      <div 
      className="fixed top-1/2 left-1/2"
        onClick={() => onDialog(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex p-8 bg-amber-500  rounded-md items-center origin-center   justify-center flex-col "
        >
          <h3  >{message}</h3>
          <h1  >{nameProduct}</h1>
          <div className="flex items-center">
            <button
              onClick={() => onDialog(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Yes
            </button>
            <button
              onClick={() => onDialog(false)}
              className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  }
  export default Dialog;
  