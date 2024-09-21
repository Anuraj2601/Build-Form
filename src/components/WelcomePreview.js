import React from 'react';

function WelcomePreview({ data }) {
  return (
    <div className="flex items-center h-screen">
      <div className='w-1/2 text-left ml-20 mr-10'>
      <h1 className="text-4xl font-bold mb-3">{data.heading}</h1>

      <p className="text-lg">{data.description}</p>

      <div className='p-5'>
            <button className="mr-5 mt-4 px-4 py-2 bg-black text-white rounded-md">
              {data.buttonLabel}
            </button>
        
            {data.text}
      </div>
    </div>

    <div className='w-1/2'>
      {data.image && (
        <img
          src={data.image}
          alt="Uploaded Preview"
          className="object-cover rounded-md"
          width={480}
        />
      )}
      </div>
    </div>
  );
}

export default WelcomePreview;
