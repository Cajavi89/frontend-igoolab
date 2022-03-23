

const User = ({name, username, email, phone,website,}) =>{
  return (
    <div classNameName="flex flex-col items-center pb-10">
        <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://randomuser.me/api/portraits/men/36.jpg" alt={name}/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{username}</span>
        <div className="flex mt-4 space-x-3 lg:mt-6">
            <a href="/" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ver mas info</a>
            <a href="/" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Ver posts</a>
        </div>
    </div>

  )
}

export default User;
