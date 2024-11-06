
import QuestionMark from "./QuestionMark";
import SubsectionTitle from "./SubsectionTitle";
import FieldBool from "./FieldBool"

import styles from "./BaseStyles.module.css";
import FieldList from "./FieldList";

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

	let jobs = data.fullPositions;
	let skills = data.skills;
	let honors = data.honors;


	return (
		<div className={styles.base_div + " flex-row items-start justify-between box-border px-8 py-4"}>
			{/* profile section */}
			<div className="
				box-border pt-14 pb-2 px-4
				flex flex-col items-center justify-start
				w-64 h-full
			">
				<object className="size-40" data={profilePictureURL} type="image/png">
					<QuestionMark/> {/* this will show if the above doesnt load */}
				</object>
				<p className="text-white font-bold text-2xl mt-2 py-3">{fullName}</p>
				<p className="text-gray-200">{summary.split("\n").map((str) => <>{str}<br/></>)}</p>
			</div>
			{/* main data */}
			<div className="
				flex-grow
				flex flex-row items-start justify-between
				px-12 py-10
			">
				<div className="w-52 flex flex-col items-start-justify-start">
					<SubsectionTitle title="Work Status"/>
					<FieldBool
						title={"Hiring"}
						bool={hiring}
					/>
					<FieldBool
						title={"Open To Work"}
						bool={openToWork}
					/>
				</div>				
				<div className="w-52 flex flex-col items-start-justify-start">
					<SubsectionTitle title="Experience"/>
					<FieldList
						data={[{name: "123", value: "buh"}]}
					/>
				</div>
			</div>
		</div>
	);
}