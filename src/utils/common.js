export const convertDate = date => {
    return new Date(date).toDateString();
}

export const seatsAvailable = seats => {
    return seats.seatLimit - seats.members.length
}


export const seatVacancyCheck = seats => {
     if (seatsAvailable(seats) <= 0) {
         return false;
     }
     else if (seatsAvailable(seats) > 0) {
         return true;
     }
}

export const currentMembersCheck = (groupMembers, myId) => {
    if(Object.values(groupMembers).map(member => member._id).find(memberId => memberId === myId) !== myId) {
        return false;
    }
    else if(Object.values(groupMembers).map(member => member._id).find(memberId => memberId === myId) === myId){
        return true;
    }
}

export const groupCreatorcheck = (group, myId) => {
   if(group.createdBy._id !== myId){
       return false;
   }
   else if (group.createdBy._id === myId){
       return true;
   }
}