import { useState } from "react";

export default function Ekintzak() {
  const [ekintzak, setEkintzak] = useState([]);
  const [form, setForm] = useState({ ekimena: "", kategoria: "", sentimendua: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEkintzak([...ekintzak, { ...form, data: new Date().toISOString().split("T")[0] }]);
    setForm({ ekimena: "", kategoria: "", sentimendua: "" });
  };

  return (
    <div className="container">
      <h1>Ekintzak</h1>
      <form onSubmit={handleSubmit}>
        <input name="ekimena" placeholder="Ekimena" value={form.ekimena} onChange={handleChange} required />
        <select name="kategoria" value={form.kategoria} onChange={handleChange} required>
          <option value="">Aukeratu</option>
          <option value="Gain enpatia">Gain enpatia</option>
          <option value="Enpatia">Enpatia</option>
          <option value="Psikopatia">Psikopatia</option>
          <option value="Apatia">Apatia</option>
        </select>
        <select name="sentimendua" value={form.sentimendua} onChange={handleChange} required>
          <option value="">Aukeratu</option>
          <option value="Ondo">Ondo</option>
          <option value="Erdizka">Erdizka</option>
          <option value="Gaizki">Gaizki</option>
        </select>
        <button type="submit">Gorde</button>
      </form>
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
          {ekintzak.map((e, i) => (
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
