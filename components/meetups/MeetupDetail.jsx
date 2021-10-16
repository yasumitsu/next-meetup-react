import { MongoClient } from 'mongodb';

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

export const getStaticPaths = async () => {
	const client = await MongoClient.connect(
		'mongodb+srv://next-meetup:GtgnvjPxRYId3MZv@cluster0.npvtb.mongodb.net/meetups?retryWrites=true&w=majority'
	);
	const db = client.db();

	const meetupsCollection = db.collection('meetups');

	const meetups = await meetupsCollection.find({ _id: 1 }).toArray();

	client.close();

	return {
		fallback: false,
		paths: meetups.map((meetup) => ({ params: { meetupId: meetup_id.toString() } }))
	};
};

export const getStaticProps = async (context) => {
	const client = await MongoClient.connect(
		'mongodb+srv://next-meetup:GtgnvjPxRYId3MZv@cluster0.npvtb.mongodb.net/meetups?retryWrites=true&w=majority'
	);
	const db = client.db();

	const meetupsCollection = db.collection('meetups');

	const selectedMeetup = await meetupsCollection.findOne({ _id: meetupId });

	const meetupId = context.params.meetupId;
	props: {
		meetupData: selectedMeetup;
	}
};

export default MeetupDetails;
