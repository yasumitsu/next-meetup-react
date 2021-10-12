import classes from './MeetupDetail.module.css';

const MeetupDetails = (props) => {
	return (
		<section className={classes.detail}>
			<img src={props.image} alt="" />
			<h1>{props.title}</h1>
			<address>{props.address}</address>
			<p>{props.description}</p>
		</section>
	);
};

export default MeetupDetails;
