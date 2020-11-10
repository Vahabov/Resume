import React from 'react';
import Portfolios from '../../components/Portfolios'
import Intro from '../../components/Intro';
import './index.css';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

export default function Portfolio() {

    const portfolio_web = useSelector(state => state.portfolio.portfolio_web);
    const portfolio_mobile = useSelector(state => state.portfolio.portfolio_mobile);

    return (
        <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="portfolio_page">
            <Intro introName="PORTFOLIO" crumbnow='Portfolio' mouse={true} />
            <div className="container">
                <h3 className="title_sections">WEB</h3>
                <div className="portfolio">
                    {
                        portfolio_web.map((item, index) => {
                            return (
                                <Portfolios
                                    key={index}
                                    name={item.appName}
                                    link={item.link}
                                    img={item.img}
                                />
                            )
                        })
                    }
                </div>
                <h3 className="title_sections">MOBILE</h3>
                <div className="portfolio">
                    {
                        portfolio_mobile.map((item, index) => {
                            return (
                                <Portfolios
                                    key={index}
                                    name={item.appName}
                                    date={item.date}
                                    link={item.link}
                                    img={item.img}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </motion.div>
    )
}
