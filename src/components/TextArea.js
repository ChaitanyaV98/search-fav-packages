import React, { useState } from "react";

function TextArea({ className }) {
  const [value, setValue] = useState("");
  return (
    <div className={`${className}`}>
      <label>My Text Area:</label>
      <textarea value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}

export default TextArea;

// import React from 'react';

// const MyForm = () => {
//   const [value, setValue] = React.useState('');

//   return (
//     <form>
//       <label>
//         My Text Area:
//         <textarea value={value} onChange={(e) => setValue(e.target.value)} />
//       </label>
//     </form>
//   );
// }
