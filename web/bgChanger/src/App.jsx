import { useState } from "react";
import "./index.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("#e74c3c")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#e74c3c" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("#2ecc71")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#2ecc71" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("#3498db")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#3498db" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("#9b59b6")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#9b59b6" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("#ff8c00")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#ff8c00" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("#ffff00")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#ffff00" }}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
