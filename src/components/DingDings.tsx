import DingDing from './DingDing'
import classes from '../styles/DingDing.module.css'

const DingDings = () => {
    return (
		<div className={classes.dingDingsCntnr}>
			<DingDing />
			<DingDing />
			<DingDing />
		</div>
	);
}

export default DingDings
