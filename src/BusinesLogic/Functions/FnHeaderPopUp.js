// import { Link } from "react-router-dom";
// import WindowPopUp from "../../components/Header/WindowPopUp/WindowPopUp";
// import { stateConst } from "../State/StateConst";

// export const FnHeaderPopUp = (isOpen) => {
//   {
//     stateConst.header.man.map((element) => {
//       if (element.popUp) {
//         return (
//           <div className={header.container} onMouseOver={handleMouseOver}>
//             <div className={`  ${header.trigger}  ${header.link}`}>
//               <Link
//                 style={{ textDecoration: "none", color: "black" }}
//                 to={element.path}>
//                 {element.name}
//               </Link>
//             </div>
//             {isOpen && (
//               <div className={header.popup}>
//                 <WindowPopUp special={true} props={element.miniMenu} />
//               </div>
//             )}
//           </div>
//         );
//       } else {
//         return (
//           <div className={header.link}>
//             <Link
//               style={{ textDecoration: "none", color: "black" }}
//               to={element.path}>
//               {element.name}
//             </Link>
//           </div>
//         );
//       }
//     });
//   }
// };
