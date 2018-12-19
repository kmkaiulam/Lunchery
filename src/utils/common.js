
//DATE FUNCTIONS

export const convertDate = date => {
    let correctDate = new Date(date)
    correctDate.setDate(correctDate.getDate()+1)
    return new Date(correctDate).toDateString();
};
//DON't NEED
export const stringifyDate = date => {
    return  new Date(date).toString()
   }
   
export const splitDate = date => {
         return stringifyDate(date).split(' ').slice(0,4).join(' ')
 }
   
export const findDate = (array, date) => {
    return array.find(x => x === splitDate(date))
}

export const matchingDate = (array, date) => {
    if (findDate(array, date) === date) {
        return true
    }   
    else {
           return false;
       }
}
export const sortByDate = (a,b) => {
    return new Date(a.lunchDate)- new Date(b.lunchDate)
}


export const seatsAvailable = seats => {
    return seats.seatLimit - seats.members.length
};


export const seatVacancyCheck = seats => {
     if (seatsAvailable(seats) <= 0) {
         return false;
     }
     else if (seatsAvailable(seats) > 0) {
         return true;
     }
};

export const currentMemberFilter = (group, myId) => {
  return Object.values(group).map(member => member._id).find(memberId => memberId === myId)
};

export const currentMembersCheck = (group, myId) => {
    if( currentMemberFilter(group, myId) !== myId) {
        return false;
    }
    else if(currentMemberFilter(group, myId) === myId){
        return true;
    }
};

export const groupCreatorCheck = (group, myId) => {
   if(group.createdBy._id !== myId){
       return false;
   }
   else if (group.createdBy._id === myId){
       return true;
   }
};

export const membersPresent = group => {
    if(group.members.length > 0) {
        return true;
    } 
    else if (group.members.length === 0) {
        return false;
    }
};


export const uniqueEntries = (chefidArray, groupArray, container) => {
    for (let i=0; i <chefidArray.length; i++) {
         if (chefidArray[i] === groupArray[i].createdBy._id){
            container[i]= groupArray[i]
         }
    }   
    return container  
 }       