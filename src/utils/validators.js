export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';
export const isTrimmed = value =>
    value.trim() === value ? undefined : 'Cannot start or end with whitespace';
export const length = length => value => {
    if (length.min && value.length < length.min) {
        return `Must be at least ${length.min} characters long`;
    }
    if (length.max && value.length > length.max) {
        return `Must be at most ${length.max} characters long`;
    }
};
export const matches = field => (value, allValues) =>
    field in allValues && value.trim() === allValues[field].trim()
        ? undefined
        : 'Does not match';

export const checkDate = value => {
    if(value)  
    console.log(Math.round((new Date(value) - new Date(Date.now()))/8.64e+7))
        return (new Date(value) - Date.now())/8.64e+7 > -1 ? false : `Cannot set date earlier than ${new Date(Date.now()).toDateString()}`
    
}

export const hasFile = (values) => {
        if(values) { return values.length > 0? undefined : 'Upload a profile picture'; }
}
