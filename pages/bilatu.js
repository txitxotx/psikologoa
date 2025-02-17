import { useState } from "react";
import jsPDF from "jspdf";

export default function Bilatu() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const ekintzak = [
    { data: "2025-02-16", ekimena: "Laguntza ematea", kategoria: "Enpatia", sentimendua: "Ondo" },
    { data: "2025-02-15", ekimena: "Eztabaida gogorra", kategoria: "Psikopatia", sentimendua: "Gaizki" }
  ];

  const handleSearch = () => {
    const filtered = ekintzak.filter(e =>
      e.ekimena.includes(search) || e.kategoria.includes(search) || e.sentimendua.includes(search)
    );
    setResults(filtered);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Bilaketa Emaitzak", 10, 10);
    results.forEach((e, i) => {
      doc.text(`${e.data} - ${e.ekimena} - ${e.kategoria} - ${e.sentimendua}`, 10, 20 + i * 10);
    });
    doc.save("bilaketa-emaitzak.pdf");
  };

  return (
    <div className="container">
      <h1>Bilatu</h1>
      <input type="text" placeholder="Bilatu..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearch}>Bilatu</button>
      <button onClick={generatePDF}>PDF Sortu</button>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Ekimena</th>
            <th>Kategoria</th>
            <th>Sentimendua</th>
          </tr>
        </thead>
        <tbody>
          {results.map((e, i) => (
            <tr key={i}>
              <td>{e.data}</td>
              <td>{e.ekimena}</td>
              <td>{e.kategoria}</td>
              <td>{e.sentimendua}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
