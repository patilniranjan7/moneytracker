import React from 'react';

const Card = (props) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-slate-100">
            <div className="h3 px-4 py-2">
                <div className={props.className}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Card;
