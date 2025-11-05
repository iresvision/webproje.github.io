
import React from 'react';

import './LabGorevi.css';

function LabGorevi() {
    return (

        <div className="lab-container">
            <h1>LAB GÖREVİ</h1>

            { }
            { }
            { }
            <h2>Görev 1: CSS Uygulama Yöntemleri</h2>

            { }
            <h3>1. Kopya: Inline CSS</h3>
            <table
                style={{
                    width: '60%',
                    borderCollapse: 'collapse',
                    marginTop: '20px',
                    border: '2px solid blue',
                }}
            >
                <thead
                    style={{
                        backgroundColor: '#e0e0ff' /* Açık mavi */,
                        color: '#000033',
                    }}
                >
                    <tr>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Gün</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Ders 1</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Ders 2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                            Pazartesi
                        </td>
                        <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                            Matematik
                        </td>
                        <td style={{ border: '1px solid #ccc', padding: '10px' }}>Fizik</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ccc', padding: '10px' }}>Salı</td>
                        <td style={{ border: '1px solid #ccc', padding: '10px' }}>React</td>
                        <td style={{ border: '1px solid #ccc', padding: '10px' }}>CSS</td>
                    </tr>
                </tbody>
            </table>

            { }
            { }
            <style>
                {`
          .internal-table {
            border-collapse: collapse;
            width: 60%;
            margin-top: 20px;
            border: 2px solid red;
          }

          .internal-table th,
          .internal-table td {
            border: 1px solid #ccc;
            padding: 10px;
            text-align: center;
          }

          .internal-table th {
            background-color: #ffe0e0; /* Açık kırmızı */
            color: #330000;
          }
        `}
            </style>
            <h3>2. Kopya: Internal CSS</h3>
            <table className="internal-table">
                <thead>
                    <tr>
                        <th>Gün</th>
                        <th>Ders 1</th>
                        <th>Ders 2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pazartesi</td>
                        <td>Matematik</td>
                        <td>Fizik</td>
                    </tr>
                    <tr>
                        <td>Salı</td>
                        <td>React</td>
                        <td>CSS</td>
                    </tr>
                </tbody>
            </table>

            { }
            <h3>3. Kopya: External CSS</h3>
            { }
            <table className="external-table">
                <thead>
                    <tr>
                        <th>Gün</th>
                        <th>Ders 1</th>
                        <th>Ders 2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pazartesi</td>
                        <td>Matematik</td>
                        <td>Fizik</td>
                    </tr>
                    <tr>
                        <td>Salı</td>
                        <td>React</td>
                        <td>CSS</td>
                    </tr>
                </tbody>
            </table>

            { }
            { }
            { }
            <h2>Görev 2: 3 Div ile Daireler</h2>
            { }
            <div className="circle-container">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
            </div>
        </div>
    );
}


export default LabGorevi;