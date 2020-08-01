import project from './projects';
import auth from './auth';
import endpoints from './endpoints';

export const authMutation = {
  ...auth
};
export const projectMutation = {
  ...project
};
export const endpointMutation = {
  ...endpoints
};