
import {
	Languages,
	Factory,
	BriefcaseBusiness,
	ContactRound
} from "lucide-react"

import QuestionMark from "./QuestionMark";
import FieldString from "./FieldString";
import FieldList from "./FieldList";

let icon_color = "rgb(60, 150, 255)";
let icon_size = 17;

export default function UserDataOutput({data})
{
	if(data.fullPositions === undefined || data.skills === undefined)
		return <></>;

	let summary = data.headline;//.split("\n");
	//for(let i = 0; i < summary.length-1; ++i)
	//	summary[i] = <>{summary[i]}<br/></>;

	let profilePictureURL = data.profilePicture;
	let fullName = data.firstName + " " + data.lastName

	let hiring = data.isHiring;
	let openToWork = data.isOpenToWork;
	let languages = data.languages.map((lang) => lang.name).join(", ");

	let skills = data.skills.map(skill => (
		{
			title: skill.name,
			value: skill.endorsementsCount ? skill.endorsementsCount : 0
		}
	));

	let jobs = [];
	let currentJob;

	if(data.fullPositions[0].end.year === 0)
		currentJob = data.fullPositions[0].companyName;
	else
		currentJob = "Unemployed";
	
	for(let i = 1; i < data.fullPositions.length; ++i)
		jobs.push({
			title: data.fullPositions[i].companyName,
			value: data.fullPositions[i].start.year + " - " + data.fullPositions[i].end.year
		});

	let honors = data.honors;


	return (
		<div className="
			w-[90%] sm:w-[35rem]
			transition-all duration-100
			box-border px-10 sm:px-12 pt-12 pb-10
			flex flex-col items-center justify-start
			bg-[rgb(10,10,10)] rounded-2xl
			border border-solid border-default_border
		">
			<object className="size-36 rounded-full overflow-hidden" data={profilePictureURL} type="image/png">
				<QuestionMark/> {/* this will show if the above doesnt load */}
			</object>
			<h3 className="
				mt-6
				text-[rgb(240,240,240)] text-[1.7rem] font-bold
			">
				{fullName}
			</h3>
			<p className="
				text-neutral-200 text-center
			">
				{summary}
			</p>
			<div className="w-full mt-8 mb-4 flex flex-col items-center justify-between sm:flex-row sm:items-start">
				<div className="w-full sm:w-[44%] flex flex-col items-center justify-start">
					<FieldString
						title={"Languages"}
						string={languages}
						icon={<Languages color={icon_color} size={icon_size}/>}
					/>
					<FieldString
						title={"Current Workplace"}
						string={currentJob}
						icon={<Factory color={icon_color} size={icon_size}/>}
					/>
				</div>
				<div className="w-full sm:w-[44%] flex flex-col items-center justify-start">
					<FieldString
						title={"Hiring"}
						string={hiring ? "Yes" : "No"}
						icon={<BriefcaseBusiness color={icon_color} size={icon_size}/>}
					/>
					<FieldString
						title={"Open To Work"}
						string={openToWork ? "Yes" : "No"}
						icon={<ContactRound color={icon_color} size={icon_size}/>}
					/>
				</div>
			</div>
		</div>
	);
}