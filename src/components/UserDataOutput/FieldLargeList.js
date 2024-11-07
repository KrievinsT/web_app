
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
					<p className="
						w-full mb-px last:mb-0
						box-border px-3 py-[0.32em]
						flex flex-row items-center justify-between
						bg-neutral-900 text-white text-wrap
					">
						{entry /*border-b border-solid border-white last:border-b-0*/}
					</p>
				)}
			</div>
		</div>
	)
}