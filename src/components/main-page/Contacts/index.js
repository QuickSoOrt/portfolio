import React from 'react';

const Contacts = () => {
  return (
    <div name="contacts" className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='max-w-[1000px] w-full'>
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#1DB700]">
              Contact
            </p>
            <p className="py-6">// Submit the form below or shoot me an email - brunorafaelfariameira@gmail.com</p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-1 gap-8'>
          <form action='https://getform.io/f/8ec7a250-2778-44e7-829b-187dc3a75632'  method='POST' className='flex flex-col w-full text-black'>
            <input className="bg-[#ccd6f6] p-2" type='text' placeholder='Name' name='name'></input>
            <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email'></input>
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='5' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#1DB700] hover:border-[#1DB700] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
          </form>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default Contacts;