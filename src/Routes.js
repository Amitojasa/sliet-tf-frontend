import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AdminRoutes from './auth/helper/AdminRoutes'
import PrivateRoute from './auth/helper/privateRoutes'
import Home from './core/Home'
import Signin from './user/Signin'
import Signout from './user/Signout'
import Signup from './user/Signup'
import UserDashboard from './user/UserDashboard'
import AdminDashboard from './user/AdminDashboard'
import Profile from './user/Profile'
import SuperAdminRoutes from './auth/helper/SuperAdminRoutes'
import SuperAdminDashboard from './user/SuperAdminDashboard'
import Coordinator from './superAdmin/Coordinator'
import AddDomain from './superAdmin/AddDomain'
import AddEvent from './superAdmin/AddEvent'
import AddWorkshop from './superAdmin/AddWorkshop'
import AddWorkshopSession from './superAdmin/AddWorkshopSession'
import Domains from './core/Domains'
import Domain from './core/Domain'
import fail from './user/fail'
import success from './user/success'
import Workshops from './core/Workshops'
import Workshop from './core/Workshop'


function Routes() {
    return (
        <BrowserRouter>

            <Switch>
                <Route path="/" exact component={Home}></Route>
                {/* <Route path="/payment" exact render={() => { window.location.href = "/pay/checkout.html" }}></Route> */}
                <Route path="/signup" exact component={Signup}></Route>
                <Route path="/signin" exact component={Signin}></Route>
                <Route path="/signout" exact component={Signout}></Route>
                <Route path="/getSuccess" exact component={success}></Route>
                <Route path="/getFailure" exact component={fail}></Route>
                <Route path="/domains" exact component={Domains}></Route>
                <Route
                    path="/domain/:domainId"
                    exact
                    component={Domain}
                />
                <Route path="/workshops" exact component={Workshops}></Route>
                <Route
                    path="/workshop/:workshopId"
                    exact
                    component={Workshop}
                />
                <SuperAdminRoutes path="/superadmin/dashboard" exact component={SuperAdminDashboard} />
                <SuperAdminRoutes path="/superadmin/coordinator" exact component={Coordinator} />
                <SuperAdminRoutes path="/superadmin/adddomain" exact component={AddDomain} />
                <SuperAdminRoutes path="/superadmin/addevent" exact component={AddEvent} />
                <SuperAdminRoutes path="/superadmin/addworkshop" exact component={AddWorkshop} />
                <SuperAdminRoutes path="/superadmin/addworkshopsession" exact component={AddWorkshopSession} />
                <AdminRoutes path="/admin/dashboard" exact component={AdminDashboard} />
                <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
                <PrivateRoute path="/user/dashboard/profile" exact component={Profile} />


            </Switch>

        </BrowserRouter>
    )
}

export default Routes
