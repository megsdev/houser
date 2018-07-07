import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Dashboard from './component/Dashboard/Dashboard'
import Wizard from './component/Wizard/Wizard'

import StepOne from './component/StepOne/StepOne'
import StepTwo from './component/StepTwo/StepTwo'
import StepThree from './component/StepThree/StepThree'

export default (
    <Switch>
        <Route component={Dashboard} exact path='/' />
        <Route exact component={Wizard} path='/wizard' />
        <Route component={StepOne} path='/wizard/step1' />
        <Route component={StepTwo} path='/wizard/step2' />
        <Route component={StepThree} path='/wizard/step3' />
    </Switch>
)