
import styles from "./FieldListStyles.module.css";

export default function FieldList({data}) // [{name: "...", value: ...}]
{
	let items = [];


	return (
		<div className="
			w-full max-h-36 rounded
			flex flex-col items-center justify-start
			overflow-y-auto
		">
			{data.map((entry)=><div className={styles.list_element}>
				{entry.name}: {entry.value}
			</div>)}
		</div>
	)
}