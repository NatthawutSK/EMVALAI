"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, {
  Draggable,
  DropArg,
} from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon, ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { EventSourceInput } from "@fullcalendar/core/index.js";
import { type } from "os";

interface Event {
  title: string;
  start: Date | string;
  end: Date | string;
  allDay: boolean;
  id: number;
  description: string;
}

interface Creator {
  email: string;
  displayName: string;
  self: boolean;
}

interface Organizer {
  email: string;
  displayName: string;
  self: boolean;
}

interface StartEnd {
  date: string;
}

interface CalendarEvent {
  kind: string;
  etag: string;
  id: string;
  status: string;
  htmlLink: string;
  created: string;
  updated: string;
  summary: string;
  description: string;
  creator: Creator;
  organizer: Organizer;
  start: StartEnd;
  end: StartEnd;
  transparency: string;
  visibility: string;
  iCalUID: string;
  sequence: number;
  eventType: string;
}

export default function Home() {
  const [events, setEvents] = useState([
    { title: "Important", id: 1 },
    { title: "Chill Day's", id: 2 },
    { title: "Free", id: 3 },
  ]);
  const [allEvents, setAllEvents] = useState<Event[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState<number | null>(null);
  const [newEvent, setNewEvent] = useState<Event>({
    title: "",
    start: "",
    end: "",
    allDay: false,
    description:"",
    id: 0,
  });

  const [fetchDaysApi, setFetchDaysApi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.googleapis.com/calendar/v3/calendars/th.TH%23holiday%40group.v.calendar.google.com/events?key=AIzaSyDrbYPWVYOYreGtGN2SkGfqTbG0_xk-GTE"
        );
        const data = await response.json();

        // Update state with the complete dataset
        // const dataArray = Array.isArray(data) ? data : [data];

        // console.log("DataArray",dataArray);
        // console.log("type", typeof(data))

        // const specificObjects = dataArray.map(
        //   (item,index) => ({
        //     end: item.items[index].end.date,
        //     start: item.items[index].start.date,
        //     title: item.items[index].summary,
        //     allDay: true,
        //     id: index
        //   })
        // );

        const keys = Object.values(data.items);

        type data = {
          title: string;
          start: Date | string;
          end: Date | string;
          allDay: boolean;
          id: number;
        };

        // Map over keys to create an array of objects
        const daysData = keys.map((key: any, index) => ({
          start: key.start.date,
          end: key.end.date,
          title: key.summary,
          description: key.description,
          id: index,
          allDay: true,
        }));

        // const specificObjects = [{ index: 0, day: data.day }];

        console.log("DAY REAL",daysData);
        setFetchDaysApi(daysData);
        setAllEvents(daysData);

        // Set filtered data initially to the complete dataset
        // setFilteredData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // const [dayevents, setDayEvents] = useState(async () => {
  //   const res = await fetch(
  //     "https://www.googleapis.com/calendar/v3/calendars/th.TH%23holiday%40group.v.calendar.google.com/events?key=AIzaSyDrbYPWVYOYreGtGN2SkGfqTbG0_xk-GTE"
  //   );
  //   const data = await res.json();
  //   console.log(data);
  //   console.log("get Day", data.items[0].end.date);
  //   return data;
  // });

  console.log("Event", allEvents);

  useEffect(() => {
    let draggableEl = document.getElementById("draggable-el");
    if (draggableEl) {
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: function (eventEl) {
          let title = eventEl.getAttribute("title");
          let id = eventEl.getAttribute("data");
          let start = eventEl.getAttribute("start");
          return { title, id, start };
        },
      });
    }
  }, []);

  function handleDateClick(arg: { date: Date; allDay: boolean }) {
    setNewEvent({
      ...newEvent,
      start: arg.date,
      allDay: arg.allDay,
      id: new Date().getTime(),
    });
    setShowModal(true);
  }

  function addEvent(data: DropArg) {
    const event = {
      ...newEvent,
      start: data.date.toISOString(),
      title: data.draggedEl.innerText,
      allDay: data.allDay,
      id: new Date().getTime(),
    };
    console.log("All", allEvents);
    console.log("Add", event);
    setAllEvents([...allEvents, event]);
  }

  function handleDeleteModal(data: { event: { id: string } }) {
    setShowDeleteModal(true);
    setIdToDelete(Number(data.event.id));
    console.log("Delete", idToDelete)
  }

  function handleDelete() {
    setAllEvents(
      allEvents.filter((event) => Number(event.id) !== Number(idToDelete))
    );
    setShowDeleteModal(false);
    setIdToDelete(null);
  }

  function handleCloseModal() {
    setShowModal(false);
    setNewEvent({
      title: "",
      start: "",
      end: "",
      allDay: false,
      description:"",
      id: 0,
    });
    setShowDeleteModal(false);
    setIdToDelete(null);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewEvent({
      ...newEvent,
      title: e.target.value,
    });
  };
  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewEvent({
      ...newEvent,
      description: e.target.value,
    });
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAllEvents([...allEvents, newEvent]);
    setShowModal(false);
    setNewEvent({
      title: "",
      start: "",
      end: "",
      allDay: false,
      description:"",
      id: 0,
    });
  }

  return (
    <>
      <nav className="flex justify-between mb-6 border-b border-blue-100 p-8">
        <h1 className="font-bold text-2xl text-gray-700">Calendar</h1>
      </nav>
      <main className="min-h-screen flex-col items-center px-16">
        <div className="grid grid-cols-10">
          <div className="col-span-10">
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth timeGridWeek",
              }}
              events={allEvents as EventSourceInput}
              nowIndicator={true}
              // editable={true}
              droppable={true}
              selectable={true}
              selectMirror={true}
              dateClick={handleDateClick}
              drop={(data) => addEvent(data)}
              eventClick={(data) => handleDeleteModal(data)}
            />
          </div>
          
          {/* <div
            id="draggable-el"
            className="ml-8 w-full border-2 p-2 rounded-md mt-16 lg:h-1/2 bg-blue-50"
          >
            <h1 className="font-bold text-lg text-center">Drag Event</h1>
            {events.map((event) => (
              <div
                className="fc-event border-2 p-1 m-2 w-full rounded-md ml-auto text-center bg-white"
                title={event.title}
                key={event.id}
              >
                {event.title}
              </div>
            ))}
          </div> */}
        </div>

        <Transition.Root show={showDeleteModal} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={setShowDeleteModal}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel
                    className="relative transform overflow-hidden rounded-lg
                   bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                  >
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div
                          className="mx-auto flex h-12 w-12 flex-shrink-0 items-center 
                      justify-center rounded-full  sm:mx-0 sm:h-10 sm:w-10"
                        >
                          {/* <ExclamationTriangleIcon
                            className="h-6 w-6 text-red-600"
                            aria-hidden="true"
                          /> */}
                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <Dialog.Title
                            as="h3"
                            className="text-base font-semibold leading-6 text-gray-900"
                          >
                            {/* {idToDelete} */}
                            {allEvents.map(event => (event.id == idToDelete)? event.title : null)}
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-800">
                            {allEvents.map(event => (event.id == idToDelete)? event.description : null)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm 
                      font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={handleDelete}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 
                      shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={handleCloseModal}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        <Transition.Root show={showModal} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setShowModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <CheckIcon
                          className="h-6 w-6 text-green-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Add Event
                        </Dialog.Title>
                        <form action="submit" onSubmit={handleSubmit}>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="title"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                            focus:ring-2 
                            focus:ring-inset focus:ring-blue-600 
                            sm:text-sm sm:leading-6 mb-3"
                              value={newEvent.title}
                              onChange={(e) => handleChange(e)}
                              placeholder="Title"
                            />
                            <input
                              type="text"
                              name="description"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                            focus:ring-2 
                            focus:ring-inset focus:ring-blue-600 
                            sm:text-sm sm:leading-6"
                              value={newEvent.description}
                              onChange={(e) => handleChange2(e)}
                              placeholder="Description"
                            />
                          </div>
                          <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                            <button
                              type="submit"
                              className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:col-start-2 disabled:opacity-25"
                              disabled={newEvent.title === ""}
                            >
                              Create
                            </button>
                            <button
                              type="button"
                              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                              onClick={handleCloseModal}
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </main>
    </>
  );
}
