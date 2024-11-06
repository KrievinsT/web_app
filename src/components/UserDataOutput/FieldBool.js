
export default function FieldBool({title, bool})
{
	return (
		<div className="w-full flex flex-row items-center justify-between text-lg">
			<p className="text-gray-200 font-semibold">{title}</p>
			<p
				className={`
					font-bold `
					+ (bool ? "text-green-600" : "text-red-600")
				}
			>{bool ? "YES" : "NO"}</p>
		</div>
	);
}