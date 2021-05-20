import { Link }from 'react-router-dom'

import { motion }from 'framer-motion'

import Home from '../../assets/images/icons/home.svg'
import './main.scss'

import Website1 from '../../assets/images/website1.jpg'
import Website2 from '../../assets/images/website2.jpg'
import Website3 from '../../assets/images/website3.jpg'
import Website4 from '../../assets/images/website4.jpg'

const pageTransition = {
    in:{
        opacity:1,
        y:0
    },

    out:{
        opacity:0,
        y:"-100%"
    }
}

const pageDuration = {
    duration:1
}

const Portofilio = ()=>{
    return(
        <motion.div className="container"
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition}
            transition={pageDuration}
        >
            <Link to="/">
                <img className="home" src={Home} alt="" />
            </Link>
            <div className="port-top">
                <h3 className="port-top_title">Showcasing some of my best work</h3>
                <h1 className="port-top_name">Portofilio</h1>
            </div>

            <motion.div className="web-sites">
                <div className="web-sites_top">
                    <h2 className="web-sites_top__name">Web Sites</h2>
                </div>

                <div className="website-wrapper">
                    <div className="website-wrapper_items"
                        style={
                            {
                                backgroundImage: `url(${Website4})`
                            }
                        }
                    >
                        <a href="https://cinema-portal.netlify.app">
                            View Website
                        </a>
                    </div>
                    <div className="website-wrapper_items"
                        style={
                            {
                                backgroundImage: `url(${Website2})`
                            }
                        }
                    >
                        <a href="https://chopmas-pizza.netlify.app">
                            View Website
                        </a>
                    </div>
                    <div className="website-wrapper_items"
                        style={
                            {
                                backgroundImage: `url(${Website3})`
                            }
                        }
                    >
                        <a href="https://bolalar-sporti.netlify.app">
                           View Website
                        </a>
                    </div>
                    <div className="website-wrapper_items"
                        style={
                            {
                                backgroundImage: `url(${Website1})`
                            }
                        }
                    >
                        <a href="https://grants-uz.netlify.app">
                            View Website
                        </a>
                    </div>
                </div>

            </motion.div>
        </motion.div>
    )
}

export default Portofilio