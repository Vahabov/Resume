import React from 'react'
import Intro from '../../components/Intro';
import { motion } from 'framer-motion';

export default function index() {
    return (
        <div className="container">
            <motion.div
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}>
                <Intro introName="I'M KAMİL" typeWriter="Front end developer" />
            </motion.div>
        </div>
    )
}
