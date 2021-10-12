import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {


	return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
	return {
		props: {
			meetups: 
		}
	}
};

export default HomePage;
