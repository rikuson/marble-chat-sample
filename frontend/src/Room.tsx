import React from 'react';

function Room() {
  return (
    <>
      <div className="relative bg-white dark:bg-gray-800">
        <div className="mx-auto">
          <div className="flex justify-between items-center p-4 dark:text-gray-300">
            <div className="flex justify-start items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&amp;shade=600"
                alt="logo"
              />
              <span className="px-3 hidden md:inline"></span>
            </div>
            <div className="flex justify-end items-center">
              <label className="flex items-center">
                <i className="fa-solid fa-sun mr-2"></i>
                <input
                  className="peer sr-only"
                  id="darkmode-switch"
                  type="checkbox"
                  checked={true}
                />
                <span
                  className={[
                    'block',
                    'cursor-pointer',
                    'bg-gray-500',
                    'rounded-full',
                    'w-[2em]',
                    'p-[1px]',
                    'after:block',
                    'after:h-[1em]',
                    'after:w-[1em]',
                    'after:rounded-full',
                    'after:bg-white',
                    'after:transition',
                    'peer-checked:bg-blue-500',
                    'peer-checked:after:translate-x-[calc(100%-2px)]',
                  ].join(' ')}
                ></span>
                <i className="fa-solid fa-moon ml-2"></i>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div
        className="shadow-inner bg-gray-100 overflow-y-auto"
        id="subscribing"
        style={{ height: 'calc(100vh - 64px - 45px)' }}
      ></div>
      <form className="absolute bottom-0 w-full" id="publisher">
        <div className="flex border-t border-gray-300 py-2 px-3">
          <input
            className={[
              'placeholder-gray-500',
              'text-gray-900',
              'focus:ring-indigo-500',
              'focus:border-indigo-500',
              'flex-1',
              'block',
              'w-full',
              'outline-none',
            ].join(' ')}
            id="publishing"
            type="text"
            placeholder="..."
            autoFocus={true}
            autoComplete="off"
          />
          <button className="text-indigo-600 text-lg" type="submit">
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </form>
    </>
  );
}

export default Room;
