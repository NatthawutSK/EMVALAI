// "use client"

import { CalendarMain } from "@/components/CalendarMain";
import React from "react";

// import { Calendar } from "@/components/ui/calendar"

type Props = {};

export default function Calendar({}: Props) {
  // const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <div className="w-full p-20 flex justify-start">
      <div className="flex flex-row ">
        <div className="flex justify-around">
          <div className="mr-[128px]">
            <CalendarMain />
          </div>

          <div className=" bg-slate-400 rounded-md">
            <div className="min-w-[350px] max-w-[350px] max-h-[800px] overflow-y-scroll overscroll-none ">
              <p className=" text-center text-3xl p-6 bg-neutral-400 sticky top-0 opacity-3">
                Programs
              </p>
              <div className="mt-10 mx-10">
                <button className="bg-sky-500 hover:bg-sky-700 w-full p-6 rounded-md mb-3">
                  {/* Color */}
                  <div className="flex row">
                    <div className=" p-3 bg-slate-700 mr-6 rounded-md"></div>
                    <div className=" text-left">
                      <p className=" text-lg">Peter</p>
                      <p>24 Nov 64</p>
                      <p>23.00 - 24.00 PM</p>
                    </div>
                  </div>
                </button>
                <button className="bg-sky-500 hover:bg-sky-700 w-full p-6 rounded-md mb-3">
                  {/* Color */}
                  <div className="flex row">
                    <div className=" p-3 bg-slate-700 mr-6 rounded-md"></div>
                    <div className=" text-left">
                      <p>Peter</p>
                      <p>24 Nov 64</p>
                      <p>23.00 - 24.00 PM</p>
                    </div>
                  </div>
                </button>
                <button className="bg-sky-500 hover:bg-sky-700 w-full p-6 rounded-md mb-3">
                  {/* Color */}
                  <div className="flex row">
                    <div className=" p-3 bg-slate-700 mr-6 rounded-md"></div>
                    <div className=" text-left">
                      <p>Peter</p>
                      <p>24 Nov 64</p>
                      <p>23.00 - 24.00 PM</p>
                    </div>
                  </div>
                </button>

                <button className="bg-sky-500 hover:bg-sky-700 w-full p-6 rounded-md mb-3">
                  
                  <div className="flex row">
                    <div className=" p-3 bg-slate-700 mr-6 rounded-md"></div>
                    <div className=" text-left">
                      <p>Peter</p>
                      <p>24 Nov 64</p>
                      <p>23.00 - 24.00 PM</p>
                    </div>
                  </div>
                </button>

                <button className="bg-sky-500 hover:bg-sky-700 w-full p-6 rounded-md mb-3">
                  
                  <div className="flex row">
                    <div className=" p-3 bg-slate-700 mr-6 rounded-md"></div>
                    <div className=" text-left">
                      <p>Peter</p>
                      <p>24 Nov 64</p>
                      <p>23.00 - 24.00 PM</p>
                    </div>
                  </div>
                </button>

                
                <button className="bg-sky-500 hover:bg-sky-700 w-full p-6 rounded-md mb-3">
                  
                  <div className="flex row">
                    <div className=" p-3 bg-slate-700 mr-6 rounded-md"></div>
                    <div className=" text-left">
                      <p>Peter</p>
                      <p>24 Nov 64</p>
                      <p>23.00 - 24.00 PM</p>
                    </div>
                  </div>
                </button>

                <button className="bg-sky-500 hover:bg-sky-700 w-full p-6 rounded-md mb-3">
                  
                  <div className="flex row">
                    <div className=" p-3 bg-slate-700 mr-6 rounded-md"></div>
                    <div className=" text-left">
                      <p>Peter</p>
                      <p>24 Nov 64</p>
                      <p>23.00 - 24.00 PM</p>
                    </div>
                  </div>
                </button>

                <button className=" mb-3">
                  <div className=" bg-yellow-800 p-2 mr-6 rounded-md">+</div>
                </button>

                {/* <button className="bg-sky-500 hover:bg-sky-700 w-full p-8 rounded-md">PPPP</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <CalendarMain /> */}
    </div>
  );
}

