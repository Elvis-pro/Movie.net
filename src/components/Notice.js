import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "../css/HomePage.css";

export default function Notice() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className=" relative bg-blue-100 border border-blue-300 p-3 rounded-lg w-full max-w-2xl mx-auto">
      <div className="notice">
        <h3 className="n-h3">Notice</h3>
        <button
          onClick={() => setVisible(false)}
          className=" close-button absolute top-2 right-2 text-gray-600 hover:text-red-600"
        >
          <CloseIcon />
        </button>
      </div>
      <p className="pop-ads">
        movie.net has pop ads which means a new tab opens once you click. Just
        close the new tab and continue browsing. Join our Telegram channel to
        receive live updates and be among the first to know once a movie is
        uploaded. You can also use the chat box below for movie requests,
        suggestions, and feedback ❤️. Most importantly, please stay home and
        stay safe 🏠😷. We recommend using Chrome to download.
      </p>
    </div>
  );
}
