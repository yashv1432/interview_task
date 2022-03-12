export const fetchQuotablesFromAPI = async (successCallBack) => {
    console.log('\n\n fetchQuotablesFromAPI Called : ');
    try {
        let response = await fetch('http://api.quotable.io/quotes');
        let json = await response.json();
        console.log('\n\n fetchQuotablesFromAPI success: ');
        successCallBack(json.results);
    } catch (error) {
        console.log('\n\n fetchQuotablesFromAPI Failed : ');
        console.error('error', error);
        successCallBack(null);
    }
};

export const fetchSingleQuotableFromAPI = async (id, successCallBack) => {
    console.log('\n\n fetchSingleQuotableFromAPI Called : ', id);
    try {
        let response = await fetch(`http://api.quotable.io/quotes/${id}`);
        let json = await response.json();
        console.log('\n\n fetchSingleQuotableFromAPI success: ');
        successCallBack(json);
    } catch (error) {
        console.log('\n\n fetchSingleQuotableFromAPI Failed : ');
        console.error('error', error.message);
        successCallBack(null);
    }
};
