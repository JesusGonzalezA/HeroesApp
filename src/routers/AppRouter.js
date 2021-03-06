import React, { useContext } from "react";
import {
  HashRouter as Router,
  Switch
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { PrivateRoute } from "./PrivateRoute";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

    const { user } = useContext(AuthContext)

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/login" 
                        isAuthenticated={user.logged}
                        component={ LoginScreen } 
                    />
                    <PrivateRoute 
                        path="/"
                        isAuthenticated={user.logged}
                        component={ DashboardRoutes } 
                    />
                </Switch>
            </div>
        </Router>
    )
}
