import getInterceptor from '../get-interceptor';

export default {
  Link: props => null,
  history: {
    go: getInterceptor(null),
  },
};
