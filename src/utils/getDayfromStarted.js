export const getDayfromStarted = (startDatep) => {
    const startDate = new Date(startDatep);
    const currentDate = Date.now();
    const timeDifference = currentDate - startDate;
    const dayDifference = Math.floor(timeDifference/(1000*60*60*24))
    return dayDifference;
}