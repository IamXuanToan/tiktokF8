const routes = {
    home: '/',
    profile: ':nickname',
    following: 'following',
    live: 'live',
};

export const getProfilePath = (nickname) => `/@${nickname}`;

export default routes;
