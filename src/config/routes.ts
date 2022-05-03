import IRoute from '@interfaces/IRoute'
import LoginPage from '../views/login'

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Login Page',
        component: LoginPage,
        exact: true,
    },
]

export default routes
