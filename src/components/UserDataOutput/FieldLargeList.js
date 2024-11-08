
import SubsectionTitle from "./SubsectionTitle";

export default function FieldLargeList({title, data}) // [{name: "...", value: ...}]
{
	return (
		<div className="
			w-full
			flex flex-col items-center justify-start
			
		">
			<SubsectionTitle title={title}/>
			{/*<p className="text-white pb-2 text-lg">{title}</p>*/}
			<div className="
				w-full h-[8.95rem] max-h-36 rounded-xl
				bg-neutral-800
				border-2 border-solid border-neutral-800
				flex flex-col items-center justify-start
				overflow-y-auto
			">
				{data.map((entry)=>
					<div className="
						w-full mb-px last:mb-0
						flex flex-row items-center justify-between
						bg-neutral-900 text-white text-wrap
					">
						<p className="box-border pl-3 py-[0.32em]">{entry.title}</p>
						<p className="
							box-border px-3 py-[0.32em] w-32 text-center
							border-l-2 border-solid border-neutral-700
						">
							{entry.value}
						</p>
					</div>
				)}
			</div>
		</div>
	)
}