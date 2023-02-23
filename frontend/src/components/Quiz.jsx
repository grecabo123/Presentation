import React from 'react'
import { Card } from 'primereact/card'
import phi from '../assets/phising.gif'
import { Button } from 'primereact/button';
import quiz from '../assets/quiz.gif'

function Quiz() {

    const header = <center><img src={phi} alt="Logo"></img></center>;
    const title = <center><span className='title'>Phishing Site</span></center>
    return (
        <div className='mt-0 back'>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-8">
                        <Card className='p-card' title={title} header={header}>
                            {/* <h4>Quiz Time!</h4> */}
                            <center><img src={quiz} alt="Logo" className='img-responsive' width={300} height={300} /></center>
                            <ul className='quiz'>
                                <li className='mb-2'><span>1.) In your own words what is Phishing ?</span></li>
                                <li className='mb-2'><span>2.) What is your experience about Phishing ?</span></li>
                                <li className='mb-2'><span>3.) The term <b>phishing</b> was first recorded in ? </span></li>
                                <li className='mb-2'><span>4-5.) Give 2 types of examples of Phishing </span></li>
                            </ul>
                            <div className="d-flex justify-content-space">
                                <a href="/practice"><Button className='p-button-md p-button-sm p-button-info me-2' label='Return'></Button></a>
                                <a href="/closing"> <Button className='p-button-md p-button-sm me-2' label='Proceed'></Button></a>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quiz