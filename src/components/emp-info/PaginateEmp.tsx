"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface PaginationControlsProps {
	hasNextPage: boolean;
	hasPrevPage: boolean;
}

const PaginationControls = ({
	hasNextPage,
	hasPrevPage,
}: PaginationControlsProps) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const page = searchParams.get("page") ?? "1";
	const per_page = searchParams.get("per_page") ?? "8";
	const pages = Array.from(
		{ length: Math.ceil(10 / Number(per_page)) },
		(_, i) => i + 1
	);

	return (
		<div className="flex gap-2">
			<button
				className="bg-blue-500 text-white p-1"
				disabled={!hasPrevPage}
				onClick={() => {
					router.push(
						`/employees/?page=${
							Number(page) - 1
						}&per_page=${per_page}`
					);
				}}
			>
				{"<"} prev
			</button>

			{/* <div>
				{page} / {Math.ceil(10 / Number(per_page))}
			</div> */}
			{pages.map((page) => (
				<button key={page} className="">
					{page}
				</button>
			))}

			<button
				className="bg-blue-500 text-white p-1"
				disabled={!hasNextPage}
				onClick={() => {
					router.push(
						`/employees/?page=${
							Number(page) + 1
						}&per_page=${per_page}`
					);
				}}
			>
				next {">"}
			</button>
		</div>
	);
};

export default PaginationControls;
