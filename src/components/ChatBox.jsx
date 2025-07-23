// // src/components/ChatBot.jsx
// import React, { useEffect } from "react";

// const ChatBot = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.type = "module";
//     script.innerHTML = `
//       import Chatbot from 'https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js';
//       Chatbot.init({
//         chatflowid: 'YOUR_CHATFLOW_ID',
//         apiHost: 'http://localhost:3000',
//         theme: { /* customize colors & size */ }
//       });
//     `;
//     document.body.appendChild(script);
//     return () => document.body.removeChild(script);
//   }, []);

//   return <div id="flowise-chatbot"></div>;
// };

// export default ChatBot;
