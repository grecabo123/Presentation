import React from 'react'
import { Card } from 'primereact/card'
import phi from '../assets/phising.gif'
import { Button } from 'primereact/button';

import { Redirect, Route, Switch } from 'react-router-dom';
import PublicRoutes from '../routes/PublicRoutes';

function Greetings() {

    const header = <center><img src={phi} alt="Logo"></img></center>;
    const title = <center><span className='title'>Phishing Site</span></center>
    return (
        <div className='mt-0 back'>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-8">
                        <Card className='p-card' title={title} header={header}>
                            <h4>Members</h4>
                            <ul className='list-item'>
                                <li className=''><span className='fs-6'>Georgie Recabo</span></li>
                                <li><span className='fs-6'>Mark Paolo Aunzo</span></li>
                                <li><span className='fs-6'>Rena Jane Opong</span></li>
                                <li><span className='fs-6'>John Ryan Aparece</span></li>
                                <li><span className='fs-6'>Alvin Flores</span></li>
                                <li><span className='fs-6'>Bubble Go Caser</span></li>
                            </ul>
                            <div className="d-flex justify-content-space">
                                <a href="/"><Button className='p-button-md p-button-info p-button-sm me-2' label='Return'></Button></a>
                                <a href="/introduction"> <Button className='p-button-md p-button-sm me-2' label='Proceed'></Button></a>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Greetings