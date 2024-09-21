import React from 'react';

function EditableWelcomeOptions({ data, onWelcomeChange }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onWelcomeChange({ ...data, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    onWelcomeChange({ ...data, image: URL.createObjectURL(file) });
  };

  const handleRemoveImage = () => {
    onWelcomeChange({ ...data, image: null });
  };

  return (
    <div className="space-y-4">
      <label className="block">
        Title
        <input
          type="text"
          name="heading"
          value={data.heading}
          onChange={handleInputChange}
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
        />
      </label>

      <label className="block">
        Description
        <input
          type="text"
          name="description"
          value={data.description}
          onChange={handleInputChange}
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
        />
      </label>

      <label className="block">
        Button Text
        <input
          type="text"
          name="buttonLabel"
          value={data.buttonLabel}
          onChange={handleInputChange}
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
        />
      </label>

      <div>
        <label className="block mb-2">Upload Image</label>
        <input
          type="file"
          onChange={handleImageUpload}
          className="block mb-2"
        />
        {data.image && (
          <div className="relative">
            <img
              src={data.image}
              alt="Preview"
              className="w-full h-auto rounded-md mb-2"
            />
            <button
              onClick={handleRemoveImage}
              className="text-red-600 underline"
            >
              Remove Image
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditableWelcomeOptions;
