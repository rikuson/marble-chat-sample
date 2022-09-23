import React from 'react';

function Home() {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&amp;shade=600"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900"></h2>
          <p className="mt-2 text-center text-sm text-gray-600"></p>
        </div>
        <form action="room" method="GET" className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="sr-only" htmlFor="room-id">
                Room ID
              </label>
              <input
                name="room"
                className={[
                  'appearance-none',
                  'rounded-none',
                  'relative',
                  'block',
                  'w-full',
                  'px-3',
                  'py-2',
                  'border',
                  'border-gray-300',
                  'placeholder-gray-500',
                  'text-gray-900',
                  'rounded-t-md',
                  'focus:outline-none',
                  'focus:ring-indigo-500',
                  'focus:border-indigo-500',
                  'focus:z-10',
                ].join(' ')}
                id="room-id"
                type="text"
                required={true}
                placeholder="Room ID"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="user-name">
                User Name
              </label>
              <input
                name="userName"
                className={[
                  'appearance-none',
                  'rounded-none',
                  'relative',
                  'block',
                  'w-full',
                  'px-3',
                  'py-2',
                  'border',
                  'border-gray-300',
                  'placeholder-gray-500',
                  'text-gray-900',
                  'rounded-b-md',
                  'focus:outline-none',
                  'focus:ring-indigo-500',
                  'focus:border-indigo-500',
                  'focus:z-10',
                ].join(' ')}
                id="user-name"
                type="text"
                required={true}
                placeholder="User Name"
              />
            </div>
          </div>
          <div>
            <button
              className={[
                'group',
                'relative',
                'w-full',
                'flex',
                'justify-center',
                'py-2',
                'px-4',
                'border',
                'border-transparent',
                'text-sm',
                'font-medium',
                'rounded-md',
                'text-white',
                'bg-indigo-600',
                'hover:bg-indigo-700',
                'focus:outline-none',
                'focus:ring-2',
                'focus:ring-offset-2',
                'focus:ring-indigo-500',
              ].join(' ')}
              type="submit"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <i className="fa-solid fa-right-to-bracket"></i>
              </span>
              Enter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
