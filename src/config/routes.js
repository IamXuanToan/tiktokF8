const routes = {
    home: '/',
    profile: ':nickname',
    following: 'following',
};

export const getProfilePath = (nickname) => `/@${nickname}`;

export default routes;
