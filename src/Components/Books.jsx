import React, { useState } from "react";

const books = [
  {
    title: "Tafsiri Hilol",
    author: "Shayx Muhammad Sodiq Muhammad Yusuf",
    desc: "Roman XIX asr voqealarini o‘z ichiga olgan...",
    img: "https://picsum.photos/90?1",
  },
  {
    title: "Ijtimoiy Odoblar",
    author: "Shayx Muhammad Sodiq Muhammad Yusuf",
    desc: "Roman XIX asr voqealarini o‘z ichiga olgan...",
    img: "https://picsum.photos/90?2",
  },
  {
    title: "Ikki Eshik Orasi",
    author: "Abdulla Qodiriy",
    desc: "Roman XIX asr voqealarini o‘z ichiga olgan...",
    img: "https://picsum.photos/90?3",
  },
  {
    title: "O‘tkan Kunlar",
    author: "Abdulla Qodiriy",
    desc: "Roman XIX asr voqealarini o‘z ichiga olgan...",
    img: "https://picsum.photos/90?4",
  },
];

function Books({ user, setUser }) {
  const [showImage, setShowImage] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 flex-col sm:flex-row gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">MY Books</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full sm:w-auto"
        >
          Logout
        </button>
      </div>

      {/* User info */}
      <div className="flex items-center mb-6">
        <img
          src={user.img || "https://via.placeholder.com/150"}
          alt={user.name}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border mr-4 cursor-pointer object-cover"
          onClick={() => setShowImage(true)}
        />
        <div className="truncate">
          <p className="text-base sm:text-lg font-semibold">
            Xush kelibsiz, {user.name}!
          </p>
          <p className="text-gray-600 text-sm sm:text-base">{user.email}</p>
        </div>
      </div>

      {/* Books list */}
      <div className="grid sm:grid-cols-2 gap-4">
        {books.map((book, index) => (
          <div
            key={index}
            className="flex items-start p-4 border rounded-lg shadow bg-white"
          >
            <img
              src={book.img}
              alt={book.title}
              className="w-20 h-28 object-cover mr-4 rounded"
            />
            <div>
              <h2 className="text-lg font-bold">{book.title}</h2>
              <p className="text-sm text-gray-600">{book.author}</p>
              <p className="text-xs text-gray-500">{book.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for image */}
      {showImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-2"
          onClick={() => setShowImage(false)}
        >
          <img
            src={user.img || "https://via.placeholder.com/150"}
            alt="User avatar"
            className="max-w-full max-h-full sm:max-w-[80%] sm:max-h-[80%] rounded-lg shadow-xl"
          />
        </div>
      )}
    </div>
  );
}

export default Books;
