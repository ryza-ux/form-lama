"use client";

import { useState } from "react";

export default function FormPage() {
  // State untuk menyimpan data inputan form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Fungsi untuk menangani perubahan pada input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Fungsi untuk menangani saat form disubmit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Di sini Anda bisa mengintegrasikan API (misal: fetch ke /api/submit)
    alert(`Terima kasih ${formData.name}, pesan Anda telah berhasil dikirim!`);
    
    // Reset form setelah submit
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      {/* Card Form */}
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">Hubungi Kami</h1>
        <p className="text-gray-500 text-sm text-center mb-6">
          Silakan isi formulir di bawah ini dan kami akan segera membalasnya.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Input Nama */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Masukkan nama Anda"
            />
          </div>

          {/* Input Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Alamat Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="nama@email.com"
            />
          </div>

          {/* Input Pesan */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-black-700 mb-1">
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
              placeholder="Tulis pesan Anda di sini..."
            ></textarea>
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-black font-semibold py-2.5 px-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
}