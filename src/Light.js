import React from 'react';

function Light ({ room, on, toggle }) {
    console.log({ room, on });
    return (
    <button onClick={toggle}>
    {room} {on ? "on" : "off "}
    </button>
    );
};
export default React.memo(Light);