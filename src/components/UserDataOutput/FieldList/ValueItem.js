
export default function ValueItem({title, sub_title, value})
{
	return (
		<div className="
			w-full h-9
			flex flex-row items-center justify-start
			box-border px-5
			border-b border-solid border-default_border
			text-white
		">
			{title}
		</div>
	);
}