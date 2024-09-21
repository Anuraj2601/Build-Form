import React from 'react';

const FormPreview = ({ data }) => {
  return (
    <div className="m-44 p-4 items-center">
      <h2 className="text-2xl font-bold">{data.title}</h2>
      <p className="text-gray-700">{data.description}</p>
      <input
        type="email"
        value={data.email}
        readOnly
        className="border-b border-black p-2 mt-4 w-full"
        placeholder="Type here"
      />
    </div>
  );
};

export default FormPreview;
