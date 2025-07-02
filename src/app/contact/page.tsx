'use client'
import React, { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/contact', {
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-mono">メールフォーム</h1>
      {submitted ? (
        <p className="text-blue-600">送信が完了しました！</p>
      ):(
        <form onSubmit={handleSubmit}
              className="max-w-lg mx-auto bg-while p-6 rounded shadow">
          <input className="w-full mb-4 border rounded"
            name="name"
            placeholder="お名前"
            value={form.name}
            onChange={handleChange}
            required
          />
          <textarea
          name="message"
          placeholder="お問い合わせ内容"
          value={form.message}
          onChange={handleChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded h-32"
          required
        />
          <button
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-600 transition">
            送る</button>
        </form>
      )}
    </main>
  )
}