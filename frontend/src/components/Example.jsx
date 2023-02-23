import React from 'react'
import { Card } from 'primereact/card'
import phi from '../assets/phising.gif'
import { Button } from 'primereact/button';

function Example() {

    const header = <center><img src={phi} alt="Logo"></img></center>;
    const title = <center><span className='title'>Phishing</span></center>
    return (
        <div className='mt-0 back'>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-8">
                        <Card className='p-card' title={title} header={header}>
                            <h4>Example of Phishing - Email Scams </h4>

                            <div className="container mt-3">
                                <div className="img"></div>
                            </div>
                            <p className='parag'>
                                This is one common one as you can locate these emails on your spam folders of your inboxes
                                as they make look like legitimate but by clicking on the link there shown will make the user go to a certain website  Using the same phrasing, typefaces, logos, and signatures makes the messages appear legitimate.

                                In addition, attackers will usually try to push users into action by creating a sense of urgency. For example here in the picture it says that you are one of the chosen to have an iPhone 14 pro for free even if you haven't done anything to get it sounds too good to be true isn't it ? Actually it is because it’s a type of scam that people will bite on.
                            </p>
                            <div className="d-flex justify-content-space">
                                <a href="/works"><Button className='p-button-md p-button-sm p-button-info me-2' label='Return'></Button></a>
                                <a href="/practice"> <Button className='p-button-md p-button-sm me-2' label='Proceed'></Button></a>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Example