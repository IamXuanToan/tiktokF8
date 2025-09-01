import routes from '~/config/routes';

export function route(name, params = {}) {
    let path = routes[name];

    if (!path) throw new Error(`Route "${name}" không tồn tại!`);

    // thay param vào path
    Object.keys(params).forEach((key) => {
        path = path.replace(`:${key}`, params[key]);
    });

    return path;
}
