import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume/Resume';
import Portfolio from './pages/Portfolio/Portfolio';
import NotFound from './pages/NotFound';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  return (
    <main>
      <Header />
      <AnimatePresence>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/resume' exact component={Resume} />
          <Route path='/portfolio' exact component={Portfolio} />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </main>
  )
}
