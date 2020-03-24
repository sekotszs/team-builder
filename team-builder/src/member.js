import React from 'react';

const Member = ({teamMember})=> {
    const {firstName,lastName,role} = teamMember
    return(
    <div>
    <p>{firstName} {lastName}({role})</p>
    </div>
    );
};
export default Member;