import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Form1 from './components/Form1'; // Form sayfanızı import edin
import Test1 from './components/Test1'; // Test sayfanızı import edin
import './App.css';

// Ana sayfa için basit bir component
function HomePage() {
  return (
    <div>
      <h2>Ana Sayfa</h2>
      <p>Hoş geldiniz! Lütfen yukarıdaki linklerden bir sayfa seçin.</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <nav style={{ marginBottom: '20px', padding: '10px', background: '#f0f0f0' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Ana Sayfa</Link>
        <Link to="/form" style={{ marginRight: '15px' }}>Form Sayfası</Link>
        <Link to="/test">Test Sayfası</Link>
      </nav>

      <main>
        {/* Hangi URL'de hangi component'in gösterileceğini burada tanımlıyoruz */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<Form1 />} />
          <Route path="/test" element={<Test1 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;