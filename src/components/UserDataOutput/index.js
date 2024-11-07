
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

	let skills = data.skills;

	let jobs = [...data.fullPositions];
	let currentJob;
	if(jobs[0].end.year === 0)
	{
		console.log(jobs, jobs[0])
		currentJob = [jobs[0].companyName];
		jobs.shift();
	}
	else
		currentJob = ["Nowhere"];

	jobs = jobs.map(job => job.companyName);

	let honors = data.honors;


	return (
		<div className={styles.base_div + " flex-row items-start justify-between box-border px-8 py-4"}>
			{/* profile section */}
			<div className="
				box-border pt-10 pb-2 px-4
				flex flex-col items-center justify-start
				w-64 min-w-64 h-full
			">
				<object className="size-40" data={profilePictureURL} type="image/png">
					<QuestionMark/> {/* this will show if the above doesnt load */}
				</object>
				<p className="text-white font-bold text-2xl mt-2 py-3">{fullName}</p>
				{(summary).split("\n").map((str) => 
					<p className="text-gray-200">{str}</p>
				)}
				<div className="w-52 mx-4 mb-7 mt-auto flex flex-col items-start justify-start">
					<FieldBool
						title="Hiring"
						bool={hiring}
					/>
					<FieldBool
						title="Open To Work"
						bool={openToWork}
					/>
					<div className="w-full mt-6 flex-flex-col items-start justify-start">
						<FieldSmallList
							title="Languages"
							data={languages}
						/>
						<FieldSmallList
							title="Employed At"
							data={currentJob}
						/>
					</div>
				</div>
			</div>
			{/* main data */}
			<div className="
				w-full
				flex flex-wrap flex-col items-center justify-start
				px-9 py-10
			">
				<FieldLargeList
					title="Past Jobs"
					data={jobs}
				/>
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
		</div>
	);
}