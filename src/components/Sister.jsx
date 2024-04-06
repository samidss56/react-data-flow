import { useState } from "react";
import { useData } from "../context/DataContext";

const Sister = () => {
  const [sisterInput, setSisterInput] = useState("");
  const { sharedDataBrother, updateSharedDataSister } = useData();

  const sendDataToBrother = () => {
    const data = sisterInput;
    updateSharedDataSister(data);
  };

  return (
    <div className="flex flex-col gap-4 border rounded-xl px-7 py-5">
      <h1 className="text-3xl text-center font-semibold text-white">
        Sister Component
      </h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="children" className="text-white">
          Sister input
        </label>
        <input
          type="text"
          id="children"
          value={sisterInput}
          onChange={(e) => setSisterInput(e.target.value)}
          className="border border-gray-300 p-2 rounded-xl"
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
        onClick={sendDataToBrother}
      >
        Send data to Brother
      </button>
      <p className="text-white text-center">
        Data from Brother:{" "}
        <span className="font-bold">{`"${sharedDataBrother}"`}</span>
      </p>
    </div>
  );
};

export default Sister;
