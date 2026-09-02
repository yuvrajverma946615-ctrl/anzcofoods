/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { Products } from './components/Products';
import { Sustainability } from './components/Sustainability';
import { Careers } from './components/Careers';
import { Vacancies } from './components/Vacancies';
import { AnzcoBeef } from './components/AnzcoBeef';
import { Lamb } from './components/Lamb';
import { MealSolutions } from './components/MealSolutions';
import { Contact } from './components/Contact';
import { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <main className="min-h-screen">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === 'products' && <Products setCurrentPage={setCurrentPage} />}
      {currentPage === 'anzco-beef' && <AnzcoBeef setCurrentPage={setCurrentPage} />}
      {currentPage === 'lamb' && <Lamb setCurrentPage={setCurrentPage} />}
      {currentPage === 'meal-solutions' && <MealSolutions setCurrentPage={setCurrentPage} />}
      {currentPage === 'sustainability' && <Sustainability />}
      {currentPage === 'careers' && <Careers setCurrentPage={setCurrentPage} />}
      {currentPage === 'vacancies' && <Vacancies setCurrentPage={setCurrentPage} />}
      {currentPage === 'contact' && <Contact />}

      <Footer />
    </main>
  );
}
