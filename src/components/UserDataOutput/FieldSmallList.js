
export default function FieldSmallList({title, data})
{
	return (
		<div className="w-full flex flex-wrap flex-row justify-start items-start text-gray-200">
			<p className="font-semibold mr-2">{title}:</p>

			{data.map((entry, i) =>
				<p className="mr-1">{entry}{(i+1 !== data.length ? "," : "")}</p>
			)}
		</div>
	);
}