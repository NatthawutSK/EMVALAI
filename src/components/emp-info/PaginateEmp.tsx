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
	const per_page = searchParams.get("per_page") ?? "5";
	const pages = Array.from(
		{ length: Math.ceil(10 / Number(per_page)) },
		(_, i) => i + 1
	);

	return (
		<div className="flex gap-2 bg-red-900 justify-center">
			<div className="self-center">
				Page {page} of {Math.ceil(10 / Number(per_page))}
			</div>

			<button
				className="bg-blue-500 text-white p-3 rounded-lg m-2"
				disabled={!hasPrevPage}
				onClick={() => {
					router.push(
						`/employees-table/?page=${
							Number(page) - 1
						}&per_page=${per_page}`,
						{
							scroll: false,
						}
					);
				}}
			>
				{"<"} prev
			</button>

			<button
				className="bg-blue-500 text-white p-3 rounded-lg m-2"
				disabled={!hasNextPage}
				onClick={() => {
					router.push(
						`/employees-table/?page=${
							Number(page) + 1
						}&per_page=${per_page}`,
						{
							scroll: false,
						}
					);
				}}
			>
				next {">"}
			</button>
		</div>
	);
};

export default PaginationControls;
