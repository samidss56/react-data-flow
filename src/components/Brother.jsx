import { useState } from "react";
import { useData } from "../context/DataContext";

const Brother = () => {
  const [brotherInput, setBrotherInput] = useState("");
  // access shared data update from the context
  const { updateSharedDataBrother, sharedDataSister } = useData();

  const sendDataToSister = () => {
    const data = brotherInput;
    updateSharedDataBrother(data);
  };
  return (
    <div className="flex flex-col gap-4 border rounded-xl px-7 py-5">
      <h1 className="text-3xl text-center font-semibold text-white">
        Brother Component
      </h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="children" className="text-white">
          Brother input
        </label>
        <input
          type="text"
          id="children"
          value={brotherInput}
          onChange={(e) => setBrotherInput(e.target.value)}
          className="border border-gray-300 p-2 rounded-xl"
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
        onClick={sendDataToSister}
      >
        Send data to Sister
      </button>
      <p className="text-white text-center">
        Data from Sister: <span className="font-bold">{`"${sharedDataSister}"`}</span>
      </p>
    </div>
  );
};

export default Brother;
