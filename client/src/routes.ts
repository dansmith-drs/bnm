import { Home, RateReview } from '@material-ui/icons';
import HomePage from './home/Home';
import ReviewPage from './reviews/Review';

const Routes = [
  {
    path: '/',
    sidebarName: 'Home',
    navbarName: 'Home',
    icon: Home,
    component: HomePage
  },
  {
    path: '/reviews',
    sidebarName: 'Reviews',
    navbarName: 'Reviews',
    icon: RateReview,
    component: ReviewPage
  }
];

export default Routes;
