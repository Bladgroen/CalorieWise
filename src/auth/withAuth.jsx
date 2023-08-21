import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import initFirebase from '../firebase/config';

initFirebase();
const auth = firebase.auth();

const withAuth = WrappedComponent => {
    const WithAuthComponent = props => {
        const router = useRouter();
        useEffect(() => {
            auth.onAuthStateChanged(authUser => {
                if (!authUser) {
                    router.push('/login');
                }
            });
        }, []);

        return <WrappedComponent {...props} />;
    };

    // Set the display name for the wrapped component
    WithAuthComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return WithAuthComponent;
};

export default withAuth;






