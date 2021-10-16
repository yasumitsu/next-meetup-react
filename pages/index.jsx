import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {
	return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
	const client = await MongoClient.connect(
		'mongodb+srv://next-meetup:GtgnvjPxRYId3MZv@cluster0.npvtb.mongodb.net/meetups?retryWrites=true&w=majority'
	);
	const db = client.db();

	const meetupsCollection = db.collection('meetups');

	const meetups = await meetupsCollection.find().toArray();

	client.close();

	return {
		props: {
			meetups: meetups.map(({ _id, ...otherprops }) => ({
				id: _id.toString(),
				...otherprops
			}))
		},
		revalidate: 1
	};
};

export default HomePage;
