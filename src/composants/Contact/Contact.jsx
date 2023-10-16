import React from 'react'
import "./Contact.css"
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className='c-wrapper'>
        <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
                <span className='orangeText'>Contactez-nous</span>
                <span className='primaryText'>Accessibilité à Nos Services</span>
                <span className='secondaryText'>Notre équipe dédiée est là pour vous guider dans le choix de batteries adaptées, répondre à vos questions et faciliter vos commandes en gros. Nous nous engageons pleinement à garantir la satisfaction de nos clients et à fournir un service exceptionnel de haute qualité en permanence.</span>
                <div className="flexColStart contactModes">
                    <div className="flexColStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColstart detail">
                                    <span className='primaryText'>Appel</span>
                                    <br/>
                                    <span className='secondaryText'>+212 6 11 XX 67 23</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColstart detail">
                                    <span className='primaryText'>Message</span>
                                    <br/>
                                    <span className='secondaryText'>+212 6 11 XX 67 23</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>
                    </div>
                </div>           
            </div>
            <div className="c-right">
                <div className="c-image-container">
                    <img src='./contact.png' alt='image-contact'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact