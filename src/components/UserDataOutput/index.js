
import styles from "./UserDataOutput.module.css";

import QuestionMark from "./QuestionMark";
import SubsectionTitle from "./SubsectionTitle";
import FieldBool from "./FieldBool"
import FieldSmallList from "./FieldSmallList";
import FieldLargeList from "./FieldLargeList";

export default function UserDataOutput({data})
{
	if(data.fullPositions === undefined || data.skills === undefined)
		return (
			<div className={styles.base_div + " items-center justify-center"}>
				<p className="text-white font-bold text-2xl">NO DATA</p>
			</div>
		);

	let summary = data.headline;
	let profilePictureURL = data.profilePicture;
	let fullName = data.firstName + " " + data.lastName

	let hiring = data.isHiring;
	let openToWork = data.isOpenToWork;
	let languages = data.languages.map((lang) => lang.name);

	let skills = data.skills.map(skill => (
		{
			title: skill.name,
			value: skill.endorsementsCount ? skill.endorsementsCount : 0
		}
	));

	let jobs = [...data.fullPositions];
	let currentJob;
	if(jobs[0].end.year === 0)
	{
		currentJob = [jobs[0].companyName];
		jobs.shift();
	}
	else
		currentJob = ["Nowhere"];

	jobs = jobs.map(job => ({title: job.companyName, value: job.start.year + " - " + job.end.year}));
	let honors = data.honors;


	return (
		<div className={styles.base_div + " flex-row items-start justify-evenly"}>
			{/* profile section */}
			<div className="
				box-border pt-16 pb-2
				flex flex-col items-center justify-start
				w-[19.5rem] min-w-[19.5rem] h-full
			">
				<object className="size-40" data={profilePictureURL} type="image/png">
					<QuestionMark/> {/* this will show if the above doesnt load */}
				</object>
				<p className="text-white font-bold text-2xl mt-2 py-3">{fullName}</p>
				{(summary).split("\n").map((str) => 
					<p className="text-gray-200">{str}</p>
				)}
			</div>
			{/* main data */}
			<div className="
				flex-grow h-full overflow-y-auto
				flex flex-col items-center justify-start
				box-border px-10 py-10
			">
				<div className="w-full mb-8 flex flex-col items-center justify-start">
					<SubsectionTitle
						title="General"
					/>
					<div className="w-full flex flex-row items-start justify-between">
						<div className="w-2/5 flex-flex-col items-start justify-start">
							<FieldSmallList
								title="Languages"
								data={languages}
							/>
							<FieldSmallList
								title="Employed At"
								data={currentJob}
							/>
						</div>
						<div className="w-2/5 flex-flex-col items-start justify-start">
							<FieldBool
								title="Hiring"
								bool={hiring}
							/>
							<FieldBool
								title="Open To Work"
								bool={openToWork}
							/>
						</div>
					</div>
				</div>

				<FieldLargeList
					title="Past Jobs"
					header={["Company Name", "Tenure"]}
					data={jobs}
				/>
				<FieldLargeList
					title="Skills"
					header={["Skill Name", "Endorsements"]}
					data={skills}
				/>
			</div>
				{/*<FieldList
					title="Honors"
					data={[{name: "123", value: "buh"}]}
				/>
				<FieldList
					title="Honors"
					data={[{name: "123", value: "buh"}]}
				/>
				<FieldList
					title="Honors"
					data={[{name: "123", value: "buh"}]}
				/>*/}
		</div>
	);
}