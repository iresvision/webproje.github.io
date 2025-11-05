import React from 'react';
import './Yuzler.css'; // Oluşturduğumuz CSS dosyasını içe aktarıyoruz

function Yuzler() {
    return (
        <div className="yuzler-container">
            <h2>Yüz İfadeleri Animasyonu</h2>

            <div className="daire">😊</div>
            <div className="daire">😉</div>
            <div className="daire">😂</div>
            <div className="daire">😍</div>
        </div>
    );
}

export default Yuzler;