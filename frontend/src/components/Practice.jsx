import React from 'react'
import { Card } from 'primereact/card'
import phi from '../assets/phising.gif'
import { Button } from 'primereact/button';
import prac from '../assets/best.gif'

function Practice() {

    const header = <center><img src={phi} alt="Logo"></img></center>;
    const title = <center><span className='title'>Phishing Site</span></center>
    return (
        <div className='mt-0 back'>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-8">
                        <Card className='p-card' title={title} header={header}>
                            <h4>Best Practice for Phishing</h4>
                            <img src={prac} alt="Logo" width={300} />
                            <ul>
                                <li><p className='para'>Don’t click on that link

                                    Even if you know the sender, it's generally not a good idea to click on a link in an email or instant message. You should at the very least be hovering over the link to check that the destination is the right one. The destination URL of some phishing attempts can resemble an exact replica of the legitimate website and be designed to capture keystrokes or collect login and credit card information. You should bypass the link and go directly to the website if it's possible to do so through your search engine.</p></li>
                                <li><p className='para'>Don’t give your information to an unsecured site
                                    If the URL of the website doesn’t start with “https”, or you cannot see a closed padlock icon next to the URL, do not enter any sensitive information or download files from that site. Sites without security certificates may not be intended for phishing scams, but it’s better to be safe than sorry.</p></li>
                            </ul>
                            <div className="d-flex justify-content-space">
                                <a href="/example"><Button className='p-button-md p-button-sm p-button-info me-2' label='Return'></Button></a>
                                <a href="/quiz"> <Button className='p-button-md p-button-sm me-2' label='Proceed'></Button></a>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Practice