import { useParams } from 'react-router';

function Profile() {
    const nickName = useParams();
    return <h1>Profile Page: {nickName.nickname}</h1>;
}

export default Profile;
