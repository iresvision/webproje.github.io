import React, { useState } from "react";

export default function Form1() {
    const [formData, setFormData] = useState({
        ad: "",
        soyad: "",
        email: "",
        sifre: "",
        dogumTarihi: "",
        cinsiyet: "",
        sehir: "",
        onay: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form başarıyla gönderildi!");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Üyelik Formu</h2>
            <form onSubmit={handleSubmit}>
                <label>Ad:</label>
                <input type="text" name="ad" value={formData.ad} onChange={handleChange} required />

                <br /><label>Soyad:</label>
                <input type="text" name="soyad" value={formData.soyad} onChange={handleChange} required />

                <br /><label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <br /><label>Şifre:</label>
                <input type="password" name="sifre" value={formData.sifre} onChange={handleChange} required />

                <br /><label>Doğum Tarihi:</label>
                <input type="date" name="dogumTarihi" value={formData.dogumTarihi} onChange={handleChange} />

                <br /><label>Cinsiyet:</label>
                <select name="cinsiyet" value={formData.cinsiyet} onChange={handleChange}>
                    <option value="">Seçiniz</option>
                    <option value="kadın">Kadın</option>
                    <option value="erkek">Erkek</option>
                    <option value="diğer">Diğer</option>
                </select>

                <br /><label>Şehir:</label>
                <input type="text" name="sehir" value={formData.sehir} onChange={handleChange} />

                <br />
                <label>
                    <input type="checkbox" name="onay" checked={formData.onay} onChange={handleChange} />
                    Kullanım şartlarını kabul ediyorum
                </label>

                <br /><br />
                <button type="submit">Gönder</button>
            </form>
        </div>
    );
}