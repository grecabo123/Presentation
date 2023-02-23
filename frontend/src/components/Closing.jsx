import React from 'react'
import { Card } from 'primereact/card'
import phi from '../assets/phising.gif'
import { Button } from 'primereact/button';
import bow from '../assets/milk-and-mocha.gif'

function Closing() {

    const header = <center><img src={bow} alt="Logo"></img></center>;
    // const title = <center><span className='title'>Phishing Site</span></center>
    return (
        <div className='mt-0 back'>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-8">
                        <Card className='p-card'header={header}>
                            <h4>Thank You!</h4>

                            {/* <center><img src={bow} alt="Bow" className='img-fluid' width={200} /></center> */}
                            {/* <p className='parag'>Phishing is a form of social engineering where attackers deceive people into revealing sensitive information or installing malware such as ransomware. Phishing attacks have become increasingly sophisticated and often transparently mirror the site being targeted, allowing the attacker to observe everything while the victim is navigating the site, and transverse any additional security boundaries with the victim. The term "phishing" was first recorded in 1995 in the cracking toolkit AOHell. It is a variation of fishing and refers to the use of lures to "fish" for sensitive information.</p> */}
                            <div className="d-flex justify-content-space">
                                <a href="/quiz"><Button className='p-button-md p-button-sm p-button-info me-2' label='Return'></Button></a>
                                <a href="/"> <Button className='p-button-md  p-button-sm me-2' label='Back To Menu'></Button></a>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Closing