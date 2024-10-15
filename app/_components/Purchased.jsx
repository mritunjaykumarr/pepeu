function Purchased() {
    return (
      <article>
        <div>
          <p className="bg-blue-100 text-blue-800 text-xl text-center  me-2 px-2.5 py-3 rounded dark:bg-blue-900 dark:text-blue-300 mb-4 font-semibold ">
            0.1 Eth = 4,400,000 PEPE
          </p>
          <div className="w-full h-18 bg-green-100 rounded-lg flex justify-center items-center flex-col flex-1">
            <p className=" ">Your Purchased</p>

            <p className="font-bold text-3xl text-blue-600">
              {/* {tokenBalance} */} 00
            </p>
          </div>
        </div>
      </article>
    );
}

export default Purchased
//0.00006$