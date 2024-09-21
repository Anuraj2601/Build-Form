import React from 'react';

const EditableOptions = ({ data, onEmailChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onEmailChange({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Edit Email Form</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium" htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={data.title}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium" htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={data.description}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium" htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md mt-2"
        />
      </div>
    </div>
  );
};

export default EditableOptions;
