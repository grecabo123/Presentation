import React from 'react'
import { Card } from 'primereact/card'
import phi from '../assets/phising.gif'
import { Button } from 'primereact/button';

function Introduction() {

    const header = <center><img src={phi} alt="Logo"></img></center>;
    const title = <center><span className='title'>Phishing Site</span></center>
    return (
        <div className='mt-0 back'>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-8">
                        <Card className='p-card' title={title} header={header}>
                            <h4>What is Phishing ?</h4>
                            <p className='parag'>Phishing is a when the attackers attempt to trick users into doing 'the wrong thing', such as clicking a bad link that will download malware, or direct them to a dodgy website</p>
                            <div className="d-flex justify-content-space">
                                <a href="/members"><Button className='p-button-md p-button-sm p-button-info me-2' label='Return'></Button></a>
                                <a href="/background"> <Button className='p-button-md p-button-sm me-2' label='Proceed'></Button></a>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction