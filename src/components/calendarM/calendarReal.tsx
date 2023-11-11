// import React, { Component } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";

// export default class Schedule extends Component {
//   // declare any necessary functions such as handleDateClick, etc.
//   formatEvents() {
//     return this.props.appointments.map(
//       (appointment: { title: any; end: any; start: any }) => {
//         const { title, end, start } = appointment;

//         let startTime = new Date(start);
//         let endTime = new Date(end);

//         return {
//           title,
//           start: startTime,
//           end: endTime,
//           extendedProps: { ...appointment },
//         };
//       }
//     );
//   }

//   handleEventClick = (event: any) => {
//     // openAppointment is a function I wrote to open a form to edit that appointment
//     this.props.openAppointment(event.extendedProps);
//   };

//   handleEventDrop = (info: {
//     event: { extendedProps: any; start: any; end: any };
//   }) => {
//     if (window.confirm("Are you sure you want to change the event date?")) {
//       console.log("change confirmed");

//       // updateAppointment is another custom method
//       this.props.updateAppointment({
//         ...info.event.extendedProps,
//         start: info.event.start,
//         end: info.event.end,
//       });
//     } else {
//       console.log("change aborted");
//     }
//   };

//   render() {
//     return (
//       <FullCalendar
//         initialView="dayGridMonth"
//         plugins={[dayGridPlugin, interactionPlugin]}
//         editable={true}
//         eventDrop={this.handleEventDrop}
//         eventClick={this.handleEventClick}
//         events={this.formatEvents()}
//       />
//     );
//   }
// }
