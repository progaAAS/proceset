
let initialState = {
   id: null,
   firstName: null,
   secondName: null,
   email: null,
   password: null,
   isAuth: true,
   errorEmail: false
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case "USER_DATA":{
            return{
                ...state,
                id: action.id,
                firstName: action.firstName,
                secondName: action.secondName,
                email: action.email,
                password: action.password
                };
            }
            case "USER_PASSWORD_DATA":{
                return{
                    ...state,
                    password: action.password
                    };
                }
                case "USER_ERROR_DATA":{
                    return{
                        ...state,
                        errorEmail: action.error
                        };
                    }
        default:
            return state;
    }
}

export const setUsers = (firstName, secondName, email, password) => 
    ({type: "USER_DATA", firstName, secondName, email, password})

export const setPasswordData = (password) => 
    ({type: "USER_PASSWORD_DATA", password});

    export const setErrorData = (error) =>({
        type: "USER_ERROR_DATA", error
    })


export default userReducer; 