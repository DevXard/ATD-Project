import { Switch, Route, Redirect } from 'react-router-dom';

import SearchPage from '../SearchPage/SearchPage';
import DetailsPage from '../DetailsPage/DetailsPage';

const Routes = () => {

    return (
        <div>
            <Switch >
                <Route exact path="/" >
                    <SearchPage />
                </Route>
                <Route exact path="/details/:id">
                    <DetailsPage />
                </Route>
                <Redirect to="/" />
            </Switch> 
        </div>
    )
}

export default Routes