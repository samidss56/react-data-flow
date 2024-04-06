import { useState } from "react";
import Children from "../components/Children";
import Brother from "../components/Brother";
import Sister from "../components/Sister";
import { DataProvider } from "../context/DataContext";

const Parent = () => {
  // state to hold data from child
  const [childData, setChildData] = useState("no data from child");

  // state to hold parent data from parent input
  const [parentData, setParentData] = useState("no data from parent");

  // state to hold parent input
  const [parentInput, setParentInput] = useState("");

  // callback to update parent state with data from child
  const handleChildData = (dataFromChild) => {
    setChildData(dataFromChild);
  };

  const sendDataToChild = () => {
    setParentData(parentInput);
  };

  return (
    <>
      <h1 className="bg-slate-700 text-white text-3xl font-bold p-4 text-center">React Data Flow</h1>
      <div className="grid grid-cols-2 gap-10 p-10 bg-slate-700">
        <div className="border rounded-xl p-5 flex flex-col gap-4">
          <h1 className="text-3xl text-center font-semibold text-white">
            Parent Component
          </h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="parent" className="text-white">
              Parent input
            </label>
            <input
              type="text"
              id="parent"
              value={parentInput}
              className="border border-gray-300 p-2 rounded-xl"
              onChange={(e) => setParentInput(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
            onClick={sendDataToChild}
          >
            Send data to child
          </button>
          <p className="text-white text-center">
            Data from child:{" "}
            <span className="font-bold">{`"${childData}"`}</span>
          </p>
        </div>
        {/* child with callback to send data to parent */}
        <Children onSendData={handleChildData} toChild={parentData} />
        <DataProvider>
          <Brother />
          <Sister />
        </DataProvider>
      </div>
    </>
  );
};

export default Parent;
