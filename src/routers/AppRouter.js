import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import TodoAgGridPage from '../components/TodoAgGridPage';
import TodoDashboardPage from "../components/TodoDashboardPage";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={TodoDashboardPage} exact={true} />
                <Route path="/grid" component={TodoAgGridPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
