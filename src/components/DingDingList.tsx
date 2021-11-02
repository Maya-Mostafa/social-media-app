import DingDingItem from './DingDingItem'
import classes from '../styles/DingDing.module.css'

const DingDingList = () => {
    return (
		<div className={classes.dingDingsCntnr}>
			<DingDingItem />
			<DingDingItem />
			<DingDingItem />
		</div>
	);
}

export default DingDingList
