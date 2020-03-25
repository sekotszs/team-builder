import React from 'react';

const Member = ({teamMember})=> {
    const {name,email,role} = teamMember
    return(
    <div>
    <p>{name} {email}({role})</p>
    </div>
    );
};
export default Member;