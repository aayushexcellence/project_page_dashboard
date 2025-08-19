import { useState } from "react";
import avatar2 from "../../../assets/avatar2.jpg";

const NoteInput = ({ onSubmit }) => {
  const [text, setText] = useState("");

  return (
    <div className="bg-orange-50 p-4 rounded">
      <img src={avatar2} alt="Avatar" className="w-10 h-10 rounded-full mb-4 border-2 border-orange-600" />
      <textarea
        className="w-full h-[100px] border border-gray-700 p-2 rounded-lg"
        placeholder="Write"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="flex justify-end">
      <button
        className="mt-3 px-8 py-3 bg-orange-500 text-white text-sm rounded-lg"
        onClick={() => {
          if (text.trim()) {
            onSubmit(text);
            setText("");
          }
        }}
      >
        Submit
      </button>
      </div>
    </div>
  );
};

export default NoteInput;
