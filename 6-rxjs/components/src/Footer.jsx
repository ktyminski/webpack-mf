import React, { useEffect, useState } from "react";

import { text as textRX } from "./text";

export default () => {
  const [text, setText] = useState(textRX.getValue());

  const onChange = (e) => textRX.next(e.target.value);

  useEffect(() => {
    return textRX.subscribe((val) => setText(val));
  }, []);

  return (
    <header className="bg-blue-700 text-white font-bold text-3xl p-5 flex">
      <div className="flex-grow">Component: Footer</div>
      <div>
        <input
          value={text}
          name="inputValue"
          onChange={onChange}
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
        ></input>
      </div>
    </header>
  );
};
