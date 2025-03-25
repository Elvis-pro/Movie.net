import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "../css/HomePage.css";

export default function Notice() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="p-3">
      <div className="notice">
        <h3 className="n-h3">Important</h3>
        <button
          onClick={() => setVisible(false)}
          className=" close-button absolute top-2 right-2 text-gray-600 hover:text-red-600"
        >
          <CloseIcon />
        </button>
      </div>
      <p className="pop-ads">
        Please do not use opera mini, We recommend using Chrome
      </p>
    </div>
  );
}
