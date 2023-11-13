"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { UploadButton } from "@/components/uploadthing";
import { useToast } from "@/components/ui/use-toast";
import WithAuth from "@/components/WithAuth";

export interface Project {
  name: string;
  date: string;
  participants: number;
  position: string;
  isActive: boolean;
}

interface ShowDataProps {
  data: Project[];
}

const mockData: Project[] = [
  {
    name: "Project A",
    date: "2022-01-01",
    participants: 5,
    position: "Developer",
    isActive: true,
  },
  {
    name: "Project B",
    date: "2022-02-01",
    participants: 8,
    position: "Designer",
    isActive: true,
  },
  {
    name: "Project C",
    date: "2022-02-01",
    participants: 8,
    position: "Designer",
    isActive: false,
  },
  {
    name: "Project D",
    date: "2022-02-01",
    participants: 8,
    position: "Designer",
    isActive: false,
  },
  {
    name: "Project E",
    date: "2022-02-01",
    participants: 8,
    position: "Designer",
    isActive: true,
  },
];

type Props = {};

const Profile = ({ data }: ShowDataProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedDateOption, setSelectedDateOption] = useState<string | null>(
    null
  );
  const [selectedAvailableOption, setSelectedAvailableOption] = useState<
    boolean | null
  >(null);
  const [filteredData, setFilteredData] = useState<Project[]>(data || mockData);
  const [buttonText, setButtonText] = useState("Edit Profile");
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [first_name, setFname] = useState<string>(user.fname);
  const [last_name, setLname] = useState<string>(user.lname);
  const [phone, setPhone] = useState<string>(user.phone);
  const [email, setEmail] = useState<string>(user.email);
  const [date_of_birth, setDate] = useState<string>(user.dob);
  const [link, setLink] = useState<string>(
    user.image
      ? user.image
      : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
  );
  const { toast: showToast } = useToast();
  const updateImage = async (link: string) => {
    const accessToken = localStorage.getItem("accessToken");
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const response = await fetch(
      "http://localhost:8082/user-service/user/editImage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          _id: user._id,
          image: link,
        }),
      }
    );
    const data = await response.json();
    if (data === false) {
      showToast({
        title: "Error",
        description: "Upload Image Failed",
        variant: "destructive",
      });
    }
    console.log(data);
  };

  const updateProfile = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const response = await fetch("http:localhost:8082/user-service/user/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        id: user._id,
        fname: first_name,
        lname: last_name,
        email: email,
        phone: phone,
        dob: date_of_birth,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  const toggleInputState = () => {
    setIsInputDisabled(!isInputDisabled);
    setButtonText(isInputDisabled ? "Apply" : "Edit Profile");
    if (isInputDisabled === true) {
      console.log("Edit -> Apply");
    } else {
      console.log("Apply -> Edit");
    }
  };

  const handleDateChange = (value: string | null) => {
    setSelectedDateOption(value);
  };

  const handleAvilibleChange = (value: string | null) => {
    if (value === "Active") {
      setSelectedAvailableOption(true);
    } else {
      setSelectedAvailableOption(false);
    }
  };

  const handleRefresh = () => {
    setSelectedDateOption(null);
    setSelectedAvailableOption(null);
    setSearchTerm("");
  };

  useEffect(() => {
    let updatedData = data ? [...data] : [];

    updatedData = (data || mockData).filter((project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedDateOption === "Oldest") {
      updatedData = updatedData.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    } else if (selectedDateOption === "Latest") {
      updatedData = updatedData.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }

    if (selectedAvailableOption !== null) {
      updatedData = updatedData.filter(
        (project) => project.isActive === selectedAvailableOption
      );
    }
    setFilteredData(updatedData);
  }, [searchTerm, selectedDateOption, selectedAvailableOption, data]);

  return (
    <div className="h-screen">
      <div className="p-10">
        <div className="text-4xl font-bold	">Profile</div>
        <hr className="w-30 h-[2px] bg-gray-300 border-0 rounded md:my-4 dark:bg-gray-700"></hr>
      </div>
      <div className="px-10 pb-0.5">
        <div className="flex justify-center max-lg:flex-col max-lg:items-center">
          <div className="w-[35%] pr-10 max-lg:w-3/4 max-lg:mb-5">
            <div className="flex flex-col justify-center border-2 border-gray-500 p-5 items-center h-[25em]">
              {/* <Image

                  alt="User Image"
                  width={40}
                  height={50}
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                /> */}
              <img
                className="rounded-full w-40 h-40"
                src={link}
                alt="image description"
              />
              <UploadButton
                className="bg-[#64cbc5] text-white rounded-xl mt-3 p-1"
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  // Do something with the response
                  console.log("Files: ", res);

                  setLink(res ? res[0].url : "");
                  updateImage(res ? res[0].url : "");
                  // alert("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                  // Do something with the error.
                  alert(`ERROR! ${error.message}`);
                }}
              />
              {/* <p>{link}</p> */}
              <div className="text-center	mt-3">
                <div className="text-2xl font-semibold	">Hello World</div>
                <div className="text-gray-400 mt-1">Developer</div>
                <div className="mt-5">
                  <span className="font-medium">Role:</span> Employee
                </div>
              </div>
            </div>
          </div>
          <div className="w-[65%] border-2 border-gray-500 p-5 max-lg:w-full">
            <div className="grid grid-rows-3 grid-cols-2 gap-x-10 ">
              <div className="pt-5">
                <p className="mb-2">First Name</p>
                <Input
                  className="border-gray-400 border-2"
                  placeholder="First name"
                  disabled={isInputDisabled}
                  value={first_name}
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
              <div className="pt-5">
                <p className="mb-2">Last Name</p>
                <Input
                  className="border-gray-400 border-2 text-black"
                  placeholder="Last name"
                  disabled={isInputDisabled}
                  value={last_name}
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>

              <div className="pt-5">
                <p className="mb-2">Phone Number</p>
                <Input
                  className="border-gray-400 border-2"
                  placeholder="Phone Number"
                  disabled={isInputDisabled}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="pt-5">
                <p className="mb-2">Email</p>
                <Input
                  className="border-gray-400 border-2"
                  placeholder="Email"
                  disabled={isInputDisabled}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="pt-5">
                <p className="mb-2">Birthday</p>
                <Input
                  className="border-gray-400 border-2"
                  placeholder="Role"
                  type="date"
                  disabled={isInputDisabled}
                  value={date_of_birth}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-10">
              <Button className="bg-[#64cbc5]" onClick={toggleInputState}>
                {buttonText}
              </Button>
              <Button className="bg-[#64cbc5] ml-5" onClick={updateProfile}>
                Save
              </Button>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[100%] border-2 border-gray-500 p-5 my-10 pb-2 mb-10">
          <div className="pt-5 flex">
            <img
              className="w-8 h-4 m-3 mr-4"
              src="https://media.discordapp.net/attachments/948968777918345216/1172097619976278046/Filter-Icon.png?ex=655f13f9&is=654c9ef9&hm=c90086fdcb194fc11655a427869fe91c09bcde4feb21eab6f0b9275978d513db&=&width=200&height=120"
              alt="image description"
            />
            <Input
              className="border-gray-400 border-2 w-50"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select onValueChange={handleDateChange}>
              <SelectTrigger className="w-[180px] border-gray-400 border-2 ml-5">
                <SelectValue placeholder="DATE" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Date</SelectLabel>
                  <SelectItem value="Oldest">Oldest</SelectItem>
                  <SelectItem value="Latest">Latest</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select onValueChange={handleAvilibleChange}>
              <SelectTrigger className="w-[180px] border-gray-400 border-2 ml-5">
                <SelectValue placeholder="AVAILABLE" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Available</SelectLabel>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="InActive">InActive</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Button className="bg-gray-400 ml-4" onClick={handleRefresh}>
              Refresh
            </Button>
          </div>
          <div className="flex flex-wrap p-5">
            {filteredData.map((project, index) => (
              <div
                key={index}
                className={`shadow-md rounded-sm bg-gray-100 w-[18em] h-[10em] m-5 p-5 relative ${
                  project.isActive ? "border-2 border-green-500" : ""
                }`}
              >
                <div
                  className={`w-20 text-white text-center absolute top-3 right-5 rounded-sm ${
                    project.isActive ? "bg-green-500" : "bg-gray-500"
                  }`}
                >
                  {project.isActive ? "Active" : "InActive"}
                </div>
                <div className="text-xl">{project.name}</div>
                <div className="mt-3">
                  <div>Date: {project.date}</div>
                  <div>Participants: {project.participants}</div>
                  <div>Position: {project.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
