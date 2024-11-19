
// this is unfinished

import { ChevronDown } from "lucide-react"

import ValueItem from "./ValueItem.js"

import { useRef } from "react";

export default function FieldList()
{
	let dropdown_arrow = useRef(null);
	let content = useRef(null);

	let lastSize = -1;
	function onClick()
	{
		dropdown_arrow.current.classList.toggle("rotate-180");
		
		let calculatedSizes
		content.current.classList.toggle("border");
		content.current.classList.toggle("h-0");
		content.current.classList.toggle("mt-4");
	}

	return (
		<div className="
			mt-4 w-full
			flex flex-col items-center justify-start
		">
			<div className="
				w-full h-10
				bg-neutral-950 border border-solid border-default_border rounded-lg
				box-border px-4
				flex flex-row items-center justify-between
				text-white font-semibold
				cursor-pointer select-none
				sm:hover:bg-[rgb(14,14,14)] active:bg-[rgb(18,18,18)]
				transition-colors duration-100
			"
				onClick={onClick}
			>
				<p>Skills</p>
				<div ref={dropdown_arrow} className="transition-transform duration-200">
					<ChevronDown
						color="rgb(100,100,100)"
						size={20}
					/>
				</div>
			</div>

			<div ref={content} className="
				w-full h-0 rounded-lg
				bg-[rgb(12,12,12)] //border border-solid border-default_border
				overflow-hidden
				transition-all duration-200
			">
				<ValueItem
					title="Business Strategy"
					sub_title="Endorsement Count"
					value={47}
				/>
				<ValueItem
					title="Sales"
					sub_title="Endorsement Count"
					value={47}
				/>
			</div>
		</div>
	);
}