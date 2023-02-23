import React from 'react'
import { Card } from 'primereact/card'
import phi from '../assets/phising.gif'
import { Button } from 'primereact/button';

function Works() {

    const header = <center><img src={phi} alt="Logo"></img></center>;
    const title = <center><span className='title'>Phishing Site</span></center>
    return (
        <div className='mt-0 back'>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-8">
                        <Card className='p-card' title={title} header={header}>
                            <h4>How it happens ?</h4>
                            <p className='parag'>This type of attack is rather unpredicted and sophisticate to know and avoid as it is by sending message that looks like an original or legitimate
                                message that came from a certain company or website. They usually contain a link to a fake website that the user will click on. It will look like
                                the real thing but it is not , the user will then be asked some risky questions like their personal informations such as credit card number or other
                                types of personal information. then this information is then used to steal the identity of users and use them for fraudulent acts and charges on their
                                credit cards and bank accounts.</p>
                            <div className="d-flex justify-content-space">
                                <a href="/background"><Button className='p-button-md p-button-sm p-button-info me-2' label='Return'></Button></a>
                                <a href="/example"> <Button className='p-button-md p-button-sm me-2' label='Proceed'></Button></a>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works