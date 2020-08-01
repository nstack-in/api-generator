import auth from './auth';
import projects from './projects';
import endpoints from './endpoints';

export const projectAction = {
    ...projects
};
export const authAction = {
    ...auth
};
export const endpointAction = {
    ...endpoints
};