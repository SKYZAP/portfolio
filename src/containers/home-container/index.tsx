// "use client";
// import { useState } from "react";

// const HomeContainer = () => {
//   const [selectedButton, setSelectedButton] = useState("home");
//   return (
//     <>
//       <div
//         id="DetailBox"
//         className="content-start text-wrap w-fit p-4 text-[#034078] h-full"
//       >
//         <p className="text-3xl font-mono">Izzat Jehan</p>
//         <p className="text-wrap font-mono w-fit text-s">Web Developer</p>
//         <div
//           id="NavBar"
//           className="w-fit py-4 grid content-start font-mono"
//           style={{ textAlignLast: "justify" }}
//         >
//           <button
//             id="NavButton"
//             onClick={() => {
//               setSelectedButton("home");
//             }}
//             style={{ paddingTop: "1em" }}
//             className="hover:text-[#fefcfb5e]"
//           >
//             {selectedButton == "home" ? "----" : "Home"}
//           </button>
//           <button
//             id="NavButton"
//             onClick={() => {
//               setSelectedButton("projects");
//             }}
//             style={{ paddingTop: "1em" }}
//             className="hover:text-[#fefcfb5e]"
//           >
//             {selectedButton == "projects" ? "--------" : "Projects"}
//           </button>
//           <button
//             id="NavButton"
//             onClick={() => {
//               setSelectedButton("contact");
//             }}
//             style={{ paddingTop: "1em" }}
//             className="hover:text-[#fefcfb5e]"
//           >
//             {selectedButton == "contact" ? "-------" : "Contact"}
//           </button>
//           <button
//             id="NavButton"
//             onClick={() => {
//               setSelectedButton("info");
//             }}
//             style={{ paddingTop: "1em" }}
//             className="hover:text-[#fefcfb5e]"
//           >
//             {selectedButton == "info" ? "----" : "Info"}
//           </button>
//         </div>
//         <ContentDisplay selected={selectedButton} />
//       </div>
//     </>
//   );
// };

// const ContentDisplay = ({ selected }: any) => {
//   switch (selected) {
//     case "home": {
//       return (
//         <div
//           id="ContentBox"
//           style={{ left: "30%", top: "65%", right: "4%" }}
//           className="absolute overflow-hidden text-left border border-white"
//         >
//           <p className="text-[#034078] font-mono w-30">HOME STUFF</p>
//         </div>
//       );
//     }
//     case "projects": {
//       return (
//         <div
//           id="ContentBox"
//           style={{ left: "30%", top: "17%", right: "4%" }}
//           className="absolute overflow-hidden text-left border border-white"
//         >
//           <p className="text-[#034078] font-mono w-30">
//             <b>Project Name:</b>
//             <br />- Desc
//             <br />
//             <b>Project Name:</b>
//             <br />- Desc
//             <br />
//             <b>Project Name:</b>
//             <br />- Desc
//             <br />
//             <b>Project Name:</b>
//             <br />- Desc
//             <br />
//             <b>Project Name:</b>
//             <br />- Desc
//             <br />
//             <b>Project Name:</b>
//             <br />- Desc
//             <br />
//             <b>Project Name:</b>
//             <br />- Desc
//             <br />
//             <b>Project Name:</b>
//             <br />- Desc
//             <br />
//           </p>
//         </div>
//       );
//     }
//   }
// };

export const HomeContainer = () => {
  return <div>test</div>;
};

export default HomeContainer;
