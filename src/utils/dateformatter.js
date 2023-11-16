export const dateFormattingHelper = (datestr) => {
    if(!datestr){
        return "No Date Available"
    }
    const dateObject = new Date(datestr);

    const month = dateObject.getUTCMonth() + 1; // Months are zero-based
    const day = dateObject.getUTCDate();
    const year = dateObject.getUTCFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
}