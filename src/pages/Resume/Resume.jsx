import React from 'react';
// import { Link } from 'react-router-dom';
import Intro from '../../components/Intro';
import './index.css';
import Avatar from '../../assets/images/avatar.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import CV from '../../assets/images/Kamil_Vahabov.pdf';

export default function Resume() {

    const experience_data = useSelector(state => state.resume.experience_data);
    const education_data = useSelector(state => state.resume.education_data);
    const skills = useSelector(state => state.resume.skills);
    const otherSkills = useSelector(state => state.resume.otherSkills);
    const languages = useSelector(state => state.resume.languages);

    return (
        <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="resume_page">
            <Intro introName="RESUME" crumbnow='Resume' mouse={true} />
            <div className="container">
                <div className="info_me">
                    <div className="about_me">
                        <div className="avatar">
                            <img src={Avatar} alt="#" />
                        </div>
                        <div className="text">
                            <h3>
                                I have worked as a front-end developer with 2 years of work experience.
                                My extensive experience with designing and developing using React to develop mobile and web applications.
                                I would be honored to bring my skills and work ethic to support the team.
                            </h3>
                        </div>
                    </div>
                    <div className="special_info">
                        <div className="col">
                            <div className="line">
                                <span>Name: </span>
                                <span>Kamil</span>
                            </div>
                            <div className="line">
                                <span>Citizenship: </span>
                                <span>Azerbaijan</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="line">
                                <span>Age: </span>
                                <span>23 years</span>
                            </div>
                            <div className="line">
                                <span>Residence: </span>
                                <span>Baku</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="line">
                                <span>Phone: </span>
                                <span>+994 50 363 42 43</span>
                            </div>
                            <div className="line">
                                <span>E-mail: </span>
                                <a href="mailto:kamilvahabov5@gmail.com">kamilvahabov5@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <a href={CV} download className="download_btn">Download CV</a>
                </div>
                <div className="info_edu_exp">
                    <div className="column">
                        <h3 className="title_sections">Experience</h3>
                        {
                            experience_data.map((item, index) => {
                                return (
                                    <div key={item.date + index} className="item_info">
                                        <span className="date">{item.date}</span>
                                        <h3 className="job">{item.job}</h3>
                                        <p>{item.content}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="column">
                        <h3 className="title_sections">Education</h3>
                        {
                            education_data.map((item, index) => {
                                return (
                                    <div key={item.date + index} className="item_info">
                                        <span className="date">{item.date}</span>
                                        <h3 className="job">{item.job}</h3>
                                        <p>{item.content}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="skills">
                    <h3 className="title_sections">Skills</h3>
                    <div className="items">
                        {
                            skills.map((item, index) => {
                                return (
                                    <div className="item" key={index}>
                                        <CircularProgressbar
                                            value={item.percentage}
                                            text={`${item.percentage}%`}
                                            styles={buildStyles({
                                                pathColor: ` rgb(2, 168, 2)`,
                                                textColor: '#fff',
                                                trailColor: '#ffffff15',
                                            })} />
                                        <h3 className="title_item">{item.skill}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="skills">
                    <h3 className="title_sections">Other skills</h3>
                    <div className="items">
                        {
                            otherSkills.map((item, index) => {
                                return (
                                    <div className="item" key={index}>
                                        <CircularProgressbar
                                            value={item.percentage}
                                            text={`${item.percentage}%`}
                                            styles={buildStyles({
                                                pathColor: ` rgb(2, 168, 2)`,
                                                textColor: '#fff',
                                                trailColor: '#ffffff15',
                                            })} />
                                        <h3 className="title_item">{item.skill}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="skills">
                    <h3 className="title_sections">Languages</h3>
                    <div className="items">
                        {
                            languages.map((item, index) => {
                                return (
                                    <div className="item" key={index}>
                                        <CircularProgressbar
                                            value={item.percentage}
                                            text={`${item.percentage}%`}
                                            styles={buildStyles({
                                                pathColor: ` rgb(2, 168, 2)`,
                                                textColor: '#fff',
                                                trailColor: '#ffffff15',
                                            })} />
                                        <h3 className="title_item">{item.skill}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div >
        </motion.div >
    )
}
