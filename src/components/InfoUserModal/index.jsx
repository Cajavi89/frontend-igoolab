import React from 'react';
import './styles.scss';

const InfoUserModal = ({openModal, setOpenModal, props, picture }) => {
   return (
    <>
      {openModal &&
        <div className="w-screen h-screen fixed top-0 left-0 bg-opacity-50 bg-black flex items-center justify-center p-10 cursor-none flex-col z-50 ">
          <div className=" min-w-min w-9/12 h-fit bg-slate-100 relative rounded-md box-shadow-profile p-5">
            {/* header modal */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-indigo-400 ">
              <h3 className="font-semibold text-base ">{`${props.username}'s info details`}</h3>
              <button
                className="w-7 h-7 transition-all hover:bg-slate-200"
                onClick={() => setOpenModal(false)}
                data-cy="button-close-modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-x w-full h-full"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
            <div>
              <div className="flex p-3 w-full">
                <div className="flex flex-col w-3/5">
                  <span className="text-indigo-600">
                    {props.name}
                  </span>
                  <span>{props.email}</span>
                  <div className="flex gap-2  mt-5">
                    <span className=" mr-32">Address</span>
                    <ul className="flex flex-col text-left">
                      <li>{props.address.street}</li>
                      <li>{props.address.suite}</li>
                      <li>{props.address.city}</li>
                      <li>{props.address.zipcode}</li>
                    </ul>
                  </div>
                  <div className="flex gap-2  mt-5">
                    <span className=" mr-32">{`Phone `}</span>
                    <span className="flex flex-col text-left">
                      <li>{props.phone}</li>
                    </span>
                  </div>
                  <div className="flex gap-2  mt-5">
                    <span className=" mr-32">Website</span>
                    <span className="flex flex-col text-left">
                      <li>{props.website}</li>
                    </span>
                  </div>
                  <div className="flex gap-2  mt-5">
                    <span className=" mr-32">Company</span>
                    <ul className="flex flex-col text-left">
                      <li>{props.company.name}</li>
                      <li>{props.company.catchPhrase}</li>
                      <li>{props.company.bs}</li>
                    </ul>
                  </div>
                </div>
                <div className=" w-48 flex items-center justify-center text-center">
                  {' '}
                  <img
                    className="shadow-xl border-2 border-indigo-300 w-full"
                    src={picture}
                    alt={`foto-perfil-${props.name}`}
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
        }
    </>
  );
};

export default InfoUserModal;
