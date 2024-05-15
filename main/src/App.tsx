import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import ProductApp from 'product/ProductApp';

const RemoteProductApp = React.lazy(() => import("product/ProductApp"));

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: main</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <hr />
    {/* <Routes>
        <Route  path="/products/*" element={<></>}/>
      </Routes> */}
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route  path="/products/*" element={<RemoteProductApp />}/>
      </Routes>
    </Suspense>
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<BrowserRouter><App /></BrowserRouter>)
