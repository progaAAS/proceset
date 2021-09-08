
let initialState = 
    [
        {
            id: "4a09a9ae-33ae-469d-8c04-c42a576af6fc",
            name: "Рассмотрение кредитной заявки 401",
            numberOfExecutions: 687662,
            averageLeadTime: 51613920,
            averageActiveTime: 39828930,
            employeesInvolvedProcess: 769,
            numberOfScenarios: 217,
            start: 989119399,
            end: 1354305118,
            loading: 1374863806
        },
        {
            id: "4a09a9ae-33ae-469d-8c04-c42a576af6fc",
            name: "Рассмотрение кредитной заявки 401",
            numberOfExecutions: 687662,
            averageLeadTime: 51613920,
            averageActiveTime: 39828930,
            employeesInvolvedProcess: 769,
            numberOfScenarios: 217,
            start: 989119399,
            end: 1354305118,
            loading: 1374863806}
    ]
    

const listProcessReducer = (state = initialState, action) => {

    switch(action.type) {
        case "USER_DATA":{
            return{
                
                };
            }
        default:
            return state;
    }
}




export default listProcessReducer; 