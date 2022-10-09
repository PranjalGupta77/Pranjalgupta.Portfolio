import React from 'react';
import Button from './Button';

function SkillCard({thumbnail, title, description, link}) {
    return (
        <div className='flex justify-center'>
            <div className="shadow-md shadow-black bg-gradient-to-r from-gray-500 to-white rounded-2xl max-w-xs aspect-square w-60">
                <div className="w-full aspect-square">
                    <img className="h-60  w-60 object-cover rounded-t-2xl" src={thumbnail} />
                </div>
                <div className="space-y-4 flex flex-col items-center my-3 mx-2">
                    <div>
                        <h2 className="font-sans font-semibold text-2xl text-red-700">{title}</h2>
                    </div>
                    <div>
                    <p className="text-gray-800">{description}</p>
                    </div>
                    <div>
                     <a href={link}>
                        <Button>View Work</Button>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillCard;