import { Switch, Route, Redirect } from 'react-router-dom';

import SearchPage from '../SearchPage/SearhPage';

const Routes = () => {

    return (
        <div>
            <Switch >
                <Route exact path="/" >
                    <SearchPage />
                </Route>
            </Switch>

            <Redirect to="/" />
        </div>
    )
}

export default Routes