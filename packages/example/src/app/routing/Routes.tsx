/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */
import {createBrowserRouter} from 'react-router-dom';
import {PrivateRoutes} from './PrivateRoutes';
import {PublicRoutes} from './PublicRoutes';

export const router = createBrowserRouter([
  ...PublicRoutes(),
  ...PrivateRoutes()
]);
