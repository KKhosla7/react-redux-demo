import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// Higher Order Component (HOC) - A component (HOC) that renders another component
// Goal: Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a private info. Please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (<p>This is a private info. Please don't share!</p>)}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('root'));
// ReactDOM.render(<AdminInfo isAdmin={false} info="There are the details" />, document.getElementById('root'));
// ReactDOM.render(<Info info="There are the details" />, document.getElementById('root'));
// ReactDOM.render(jsx, document.getElementById('root'));
