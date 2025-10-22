import React, { useState } from "react";

export default function Test1() {
    const [score, setScore] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Test tamamlandı!");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>WEB Programcılığı Testi</h2>
            <form onSubmit={handleSubmit}>
                <p>1. HTML nedir?</p>
                <input type="text" name="soru1" placeholder="Cevabınızı yazın" />

                <p>2. CSS hangi amaçla kullanılır?</p>
                <textarea name="soru2" rows="3"></textarea>

                <p>3. Aşağıdakilerden hangisi bir JavaScript veri tipidir?</p>
                <label><input type="radio" name="soru3" value="number" /> number</label><br />
                <label><input type="radio" name="soru3" value="while" /> while</label><br />

                <p>4. HTML input türlerinden hangilerini biliyorsunuz?</p>
                <label><input type="checkbox" name="soru4" /> text</label><br />
                <label><input type="checkbox" name="soru4" /> email</label><br />
                <label><input type="checkbox" name="soru4" /> password</label><br />

                <p>5. Renk seçin:</p>
                <input type="color" />

                <p>6. Dosya yükleyin:</p>
                <input type="file" />

                <p>7. 1–10 arasında puan verin:</p>
                <input type="range" min="1" max="10" />

                <p>8. Tarih seçin:</p>
                <input type="date" />

                <p>9. Saat seçin:</p>
                <input type="time" />

                <p>10. Yaşınızı girin:</p>
                <input type="number" min="10" max="100" />

                <br /><br />
                <button type="submit">Testi Gönder</button>
            </form>
        </div>
    );
}
