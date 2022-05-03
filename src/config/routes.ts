import IRoute from '@interfaces/IRoute'
import Counter from '../views/login'

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Counter Page',
        component: Counter,
        exact: true,
    },
]

export default routes
