export const getCompareFromLs = () => {
    const data = localStorage.getItem('compare');
    const dataCompare = data ? JSON.parse(data) : [];
    const countCompare = dataCompare.length;
    return {dataCompare, countCompare}
}