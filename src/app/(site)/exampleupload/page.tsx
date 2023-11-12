"use client";
import { useState } from "react";
import { UploadButton } from "@/components/uploadthing";

export default function Home() {
	const [link, setLink] = useState("");
	return (
		<main className="flex min-h-screen flex-col items-center bg-red-900 justify-between p-24">
			<UploadButton
				endpoint="imageUploader"
				onClientUploadComplete={(res) => {
					// Do something with the response
					console.log("Files: ", res);
					setLink(res ? res[0].url : "");
					alert("Upload Completed");
				}}
				onUploadError={(error: Error) => {
					// Do something with the error.
					alert(`ERROR! ${error.message}`);
				}}
			/>
			<p>{link}</p>
		</main>
	);
}
