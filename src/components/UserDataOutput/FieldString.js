
export default function StringField({title, string, icon=<></>})
{
	return (
		<div className="
			w-full mt-6
			flex flex-col items-start justify-start
			text-base text-white
			border-b border-solid border-neutral-600
		">
			<p className="
				font-thin text-neutral-300
			">
				{title}
			</p>
			<div className="flex flex-row items-center justify-start">
				{icon}
				<p className="
					my-1 ml-2
					font-base text-[rgb(240,240,240)]
				">
					{string}
				</p>
			</div>
		</div>
	);
}