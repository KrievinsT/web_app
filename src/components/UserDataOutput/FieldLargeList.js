
import SubsectionTitle from "./SubsectionTitle";

export default function FieldLargeList({title, header, data}) // [{name: "...", value: ...}]
{
	return (
		<div className="
			w-full mt-6
			flex flex-col items-center justify-start
		">
			<SubsectionTitle title={title}/>
			{/*<p className="text-white pb-2 text-lg">{title}</p>*/}
			<div className="
				w-full rounded-lg
				bg-neutral-800
				border-2 border-solid border-neutral-800
				flex flex-col items-center justify-start
			">
				<div className="
					w-full h-40 max-h-56 overflow-y-auto rounded-lg
					flex flex-col items-center justify-start
				">
					<div className="
						sticky top-0
						w-full mb-px last:mb-0 pl-3
						flex flex-row items-center justify-between
						bg-neutral-800 text-white text-wrap
					">
						<p className="py-[0.32em]">{header[0]}</p>
						<p className="
							max-w-[7.5rem] min-w-[7.5rem] h-full
							flex items-center justify-center
							border-l-2 border-solid border-neutral-700
						">
							{header[1]}
						</p>
					</div>

					{data.map((entry)=>
						<div className="
							w-full mb-px last:mb-0 pl-3
							flex flex-row items-center justify-between
							bg-neutral-900 text-white text-wrap
						">
							<p className="py-[0.32em]">{entry.title}</p>
							<p className="
								max-w-[7.5rem] min-w-[7.5rem] h-full
								flex items-center justify-center
								border-l-2 border-solid border-neutral-700
							">
								{entry.value}
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}