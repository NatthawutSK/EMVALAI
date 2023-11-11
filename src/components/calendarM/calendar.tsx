// import { DragEvent, JSXElementConstructor, MouseEvent, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, SetStateAction, useRef, useState } from "react";
// import {
//   SevenColGrid,
//   Wrapper,
//   HeadDays,
//   DateControls,
//   StyledEvent,
//   SeeMore,
//   PortalWrapper
// } from "./Calender.styled";
// // import { IonIcon } from '@ionic/react';
// import { DAYS, MOCKAPPS } from "./conts";
// // import { FaBeer } from 'react-icons/fa';
// import { AiFillCaretLeft, AiFillCaretRight, AiOutlineClose } from "react-icons/ai";
// import { BsFillTrashFill } from "react-icons/bs";
// import {
//   datesAreOnSameDay,
//   getDarkColor,
//   getDaysInMonth,
//   getMonthYear,
//   getSortedDays,
//   nextMonth,
//   prevMonth,
//   range,
//   sortDays
// } from "./utils";

// export const Calender = () => {
//   const [currentDate, setCurrentDate] = useState(new Date(2022, 9, 1));
//   const [events, setEvents] = useState(MOCKAPPS);
//   const dragDateRef = useRef();
//   const dragindexRef = useRef();
//   const [showPortal, setShowPortal] = useState(false);
//   const [portalData, setPortalData] = useState({});

//   const addEvent = (date: Date, event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
//     if (!event.target.addEventListener.) {
//       const text = window.prompt("name");
//       if (text) {
//         date.setHours(0);
//         date.setSeconds(0);
//         date.setMilliseconds(0);
//         setEvents((prev) => [
//           ...prev,
//           { date, title: text, color: getDarkColor() }
//         ]);
//       }
//     }
//   };

//   const drag = (index: number, e: { target: any; }) => {
//     dragindexRef.current = { index, target: e.target };
//   };

//   const onDragEnter = (date: Date, e: DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     dragDateRef.current = { date, target: e.target.id };
//   };

//   const drop = (ev: { preventDefault: () => void; }) => {
//     ev.preventDefault();

//     setEvents((prev) =>
//       prev.map((ev, index) => {
//         if (index === dragindexRef.current.index) {
//           ev.date = dragDateRef.current.date;
//         }
//         return ev;
//       })
//     );
//   };

//   const handleOnClickEvent = (event: SetStateAction<{}>) => {
//     setShowPortal(true);
//     setPortalData(event);
//   };

//   const handlePotalClose = () => setShowPortal(false);

//   const handleDelete = () => {
//     setEvents((prevEvents) =>
//       prevEvents.filter((ev) => ev.title !== portalData.title)
//     );
//     handlePotalClose();
//   };

//   return (
//     <Wrapper>
//       <DateControls>
//         <AiFillCaretLeft
//           onClick={() => prevMonth(currentDate, setCurrentDate)}
//           name="arrow-back-circle-outline"
//         ></AiFillCaretLeft>
//         {getMonthYear(currentDate)}
//         <AiFillCaretRight
//           onClick={() => nextMonth(currentDate, setCurrentDate)}
//           name="arrow-forward-circle-outline"
//         ></AiFillCaretRight>
//       </DateControls>
//       <SevenColGrid>
//         {DAYS.map((day) => (
//           // eslint-disable-next-line react/jsx-key
//           <HeadDays className="nonDRAG">{day}</HeadDays>
//         ))}
//       </SevenColGrid>

//       <SevenColGrid
//         fullheight={true}
//         is28Days={getDaysInMonth(currentDate) === 28}
//       >
//         {getSortedDays(currentDate).map((day) => (
//           // eslint-disable-next-line react/jsx-key
//           <div
//             id={`${currentDate.getFullYear()}/${currentDate.getMonth()}/${day}`}
//             onDragEnter={(e) =>
//               onDragEnter(
//                 new Date(
//                   currentDate.getFullYear(),
//                   currentDate.getMonth(),
//                   day
//                 ),
//                 e
//               )
//             }
//             onDragOver={(e) => e.preventDefault()}
//             onDragEnd={drop}
//             onClick={(e) =>
//               addEvent(
//                 new Date(
//                   currentDate.getFullYear(),
//                   currentDate.getMonth(),
//                   day
//                 ),
//                 e
//               )
//             }
//           >
//             <span
//               className={`nonDRAG ${
//                 datesAreOnSameDay(
//                   new Date(),
//                   new Date(
//                     currentDate.getFullYear(),
//                     currentDate.getMonth(),
//                     day
//                   )
//                 )
//                   ? "active"
//                   : ""
//               }`}
//             >
//               {day}
//             </span>
//             <EventWrapper filter={function (arg0: { (child: any): any; (child: any): any; }): { (): any; new(): any; length: number; } {
//               throw new Error("Function not implemented.");
//             } }>
//               {events.map(
//                 (ev, index) =>
//                   datesAreOnSameDay(
//                     ev.date,
//                     new Date(
//                       currentDate.getFullYear(),
//                       currentDate.getMonth(),
//                       day
//                     )
//                   ) && (
//                     <StyledEvent
//                       onDragStart={(e: { target: any; }) => drag(index, e)}
//                       onClick={() => handleOnClickEvent(ev)}
//                       draggable
//                       className="StyledEvent"
//                       id={`${ev.color} ${ev.title}`}
//                       key={ev.title}
//                       bgColor={ev.color}
//                     >
//                       {ev.title}
//                     </StyledEvent>
//                   )
//               )}
//             </EventWrapper>
//           </div>
//         ))}
//       </SevenColGrid>
//       {showPortal && (
//         <Portal
//         title={undefined} date={undefined} {...portalData}
//         handleDelete={handleDelete}
//         handlePotalClose={handlePotalClose} />
//       )}
//     </Wrapper>
//   );
// };

// const EventWrapper = ( children: { filter: (arg0: { (child: any): any; (child: any): any; }) => { (): any; new(): any; length: number; }; } ) => {
//   if (children.filter((child: any) => child).length)
//     return (
//       <>
//         {children}
//         {children.filter((child: any) => child).length > 2 && (
//           <SeeMore
//             onClick={(e: { stopPropagation: () => void; }) => {
//               e.stopPropagation();
//               console.log("clicked p");
//             }}
//           >
//             see more...
//           </SeeMore>
//         )}
//       </>
//     );
// };

// const Portal = ( title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined, date: { toDateString: () => string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }, handleDelete: any, handlePotalClose: any ) => {
//   return (
//     <PortalWrapper>
//       <h2>{title}</h2>
//       <p>{date.toDateString()}</p>
//       <BsFillTrashFill onClick={handleDelete} name="trash-outline"></BsFillTrashFill>
//       <AiOutlineClose onClick={handlePotalClose} name="close-outline"></AiOutlineClose>
//     </PortalWrapper>
//   );
// };
