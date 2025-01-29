import React from 'react'

function Card() {
  console.log(props.username);
    return (
        <div>
            <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  <div>
    <img className="size-80 shadow-2xl rounded-md" alt="" src="https://images.pexels.com/photos/30289789/pexels-photo-30289789/free-photo-of-vintage-clock-in-train-station-with-structural-reflections.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  />
  
  </div>
  <div className="flex items-center md:items-start">
    <span className="text-2xl font-medium">Class Warfare </span>
    <span className="font-medium text-sky-500">The Anti-Patterns</span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>

        </div>
    
    )
}

export default Card