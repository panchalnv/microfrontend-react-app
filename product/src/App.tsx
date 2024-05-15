import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductLists from './Components/ProductLists';
import ProductPage from './Components/ProductPage';

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Routes>
      <Route path="/" element={<ProductLists />} />
      <Route path="/:productId" element={<ProductPage />} />
    </Routes>
    {/* <div>Name: product</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div> */}
  </div>
)
// const rootElement = document.getElementById('app')
// if (!rootElement) throw new Error('Failed to find the root element')

// const root = ReactDOM.createRoot(rootElement as HTMLElement)

// root.render(
//   <BrowserRouter basename='/products'>
//     <App />
//   </BrowserRouter>)


export default App;
