import React, { useState } from "react";

function Form({ setUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    img: "",
  });

  const [filePreview, setFilePreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fayl tanlash
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, img: reader.result }); // base64 saqlaymiz
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    setUser(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Akkaunt ochish</h2>

        <label className="block mb-3">
          <span className="block mb-1 font-medium">Ism:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full rounded focus:ring focus:ring-blue-300"
            required
          />
        </label>

        <label className="block mb-3">
          <span className="block mb-1 font-medium">Email:</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full rounded focus:ring focus:ring-blue-300"
            required
          />
        </label>

        {/* URL orqali rasm */}
        <label className="block mb-3">
          <span className="block mb-1 font-medium">Rasm URL (ixtiyoriy):</span>
          <input
            type="url"
            name="img"
            value={formData.img}
            onChange={handleChange}
            className="border p-2 w-full rounded focus:ring focus:ring-blue-300"
            placeholder="https://example.com/image.jpg"
          />
        </label>

        {/* Fayldan yuklash */}
        <label className="block mb-3">
          <span className="block mb-1 font-medium">Rasm yuklash (telefon/notbukdan):</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border p-2 w-full rounded"
          />
        </label>

        {/* Tanlangan rasm preview */}
        {filePreview && (
          <div className="mb-3 text-center">
            <img
              src={filePreview}
              alt="Preview"
              className="w-16 h-16 rounded-full mx-auto border"
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full transition"
        >
          Yuborish
        </button>
      </form>
    </div>
  );
}

export default Form;
