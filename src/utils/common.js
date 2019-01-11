
//DATE FUNCTIONS

export const convertDate = date => {
    let correctDate = new Date(date)
    correctDate.setDate(correctDate.getDate()+1)
    return new Date(correctDate).toDateString();
};

export const sortByDate = (a,b) => {
    return new Date(a.lunchDate)- new Date(b.lunchDate)
}

//GROUP FUNCTIONS
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
    else if(currentMemberFilter(group, myId) === myId || currentMemberFilter(group, myId)){
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

export const hasActiveGroups = (groups, myId) => {
   if(groups.filter(group => groupCreatorCheck( group, myId) === true).length === 0) {
       return false;
   }
   else if (groups.filter(group => groupCreatorCheck( group, myId) === true).length > 0) {
       return true;
   }
}

export const membersPresent = group => {
    if(group.members.length > 0) {
        return true;
    } 
    else if (group.members.length === 0) {
        return false;
    }
};

export const retrieveGroupMemberIds = (groupArray, index) => {
    return Object.values(groupArray[index].members.map(members => members._id))
}

export const evaluateMembership = (groupArray, index, myId) => {
    if (retrieveGroupMemberIds(groupArray, index).find(id => id === myId) !== undefined) {
        return true;
    } 
    else if (retrieveGroupMemberIds(groupArray, index).find(id => id === myId) !== undefined) {
        return false;
    }
}

 export const filterUserGroups = (groupArray, myId) => {
     let usersGroup = [{}]
    for (let i=0; i <groupArray.length; i++){
        if(evaluateMembership(groupArray, i, myId) === true){
            usersGroup[i] = groupArray[i]
        }
    }
        return usersGroup.filter(el => el.createdBy !== undefined) 
};


export const grabMatches = (chefidArray, groupArray) => {
    let matchArray = [];
    for (let i=0; i <chefidArray.length; i++) {
        matchArray.push(groupArray.findIndex(groupArray => groupArray.createdBy._id === chefidArray[i]))
    }
    return matchArray;
}


export const grabUniqueChefEntries = (groupArray, matchArray) => {
        let chefArrayObj = [{}];
        for ( let i=0; i <matchArray.length; i++){
            chefArrayObj[i] = groupArray[matchArray[i]]
        }
        return chefArrayObj
}


export const uniqueEntries = (chefidArray, groupArray) => {
  let matchArray = grabMatches(chefidArray, groupArray);
  let chefArrayObj = grabUniqueChefEntries(groupArray, matchArray);
    return chefArrayObj
}
    
  
//MEMBER FUNCTIONS
export const retrieveGroupMembers = (filteredGroupResults) => {
    let memberArray = [];
    filteredGroupResults.forEach(group => {
        memberArray.push(group.members)
    })
    let newArray = [];
    for ( let i= 0; i < memberArray.length; i++) {
        for ( let j= 0; j <memberArray[i].length; j++) {
         newArray.push(memberArray[i][j].username)
        }
    }
    let myMembers= [...new Set(newArray)]; 
    return myMembers
}