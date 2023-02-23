import React from 'react'
import { Card } from 'primereact/card'
import phi from '../assets/phising.gif'
import { Button } from 'primereact/button';
import hello from '../assets/hello.gif'

function LandingPage() {

    const header = <center><img src={phi} alt="Logo"></img></center>;
    const title = <center><span className='title'>Group 9 - Phishing Site</span></center>
    return (
        <div className='mt-0 back'>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-8">
                        <Card className='p-card' title={title} header={header}>
                       
                            <center> <img src={hello} alt="Logo" width={300} /><p className='fs-5'>Good morning everyone and welcome to our presentation. First of all, let me thank you all for coming here today.
                            </p></center>
                            
                            <div className="mt-1">
                                <center><a href="/members"><Button  className='p-button-md p-button-sm' label='Proceed'></Button></a></center>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage