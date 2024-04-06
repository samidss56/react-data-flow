import { useState } from "react";

// props catched from parent
const Children = ({ onSendData, toChild }) => {
  // state to hold child input
  const [childInput, setChildInput] = useState("");

  // send data to parent function
  const sendDataToParent = () => {
    onSendData(childInput);
  };
  return (
    <div className="flex flex-col gap-4 border rounded-xl px-7 py-5">
      <h1 className="text-3xl text-center font-semibold text-white">
        Child Component
      </h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="children" className="text-white">
          Child input
        </label>
        <input
          type="text"
          id="children"
          value={childInput}
          onChange={(e) => setChildInput(e.target.value)}
          className="border border-gray-300 p-2 rounded-xl"
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
        onClick={sendDataToParent}
      >
        Send data to parent
      </button>
      <p className="text-white text-center">
        Data from parent: <span className="font-bold">{`"${toChild}"`}</span>
      </p>
    </div>
  );
};

export default Children;
