
const SET_LAYOUT = 'SET_LAYOUT';
const IS_KNOW_SIZE = 'IS_KNOW_SIZE';
const SET_SIZE_A = 'SET_SIZE_A';
const SET_SIZE_B = 'SET_SIZE_B';
const SET_SIZE_C = 'SET_SIZE_C';

const UPDATE_PHOTO = 'UPDATE_PHOTO';
const SET_IS_VISIBLE = 'SET_IS_VISIBLE';


let initialState = {
    orderInfo: {
        layout : 'p1',
        kitchenSizes: {
            a: 0,
            b: 0,
            c: 0,
            isKnowSize: true,
        },
        facade: "f1",
        worktopType: "",
        hardwareClass: "",
        installationDate: "",
        budget: "",
        paymentMethod: "",
        userInfo: {

        }
    },
};

const setSize = (state, side, size) => {
    return {
        ...state,
        orderInfo: {
            ...state.orderInfo, kitchenSizes:{
                ...state.orderInfo.kitchenSizes,
                side: size
            }
        }
    };
};

const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LAYOUT:
            return {
                ...state,
                orderInfo: {
                    ...state.orderInfo,
                    layout: action.layout
                }
            };
        case IS_KNOW_SIZE:
            return {
                ...state,
                orderInfo: {
                    ...state.orderInfo, kitchenSizes:{
                        ...state.orderInfo.kitchenSizes,
                        isKnowSize: action.knowSize
                    }
                }
            };
        case SET_SIZE_A:
            return {
                ...state,
                orderInfo: {
                    ...state.orderInfo, kitchenSizes:{
                        ...state.orderInfo.kitchenSizes,
                        a: action.size
                    }
                }
            };
        case SET_SIZE_B:
            return {
                ...state,
                orderInfo: {
                    ...state.orderInfo, kitchenSizes:{
                        ...state.orderInfo.kitchenSizes,
                        b: action.size
                    }
                }
            };
        case SET_SIZE_C:
            return {
                ...state,
                orderInfo: {
                    ...state.orderInfo, kitchenSizes:{
                        ...state.orderInfo.kitchenSizes,
                        c: action.size
                    }
                }
            };
        case SET_IS_VISIBLE:
            return {...state, isVisible: action.setIsVisible};
        default:
            return state;
    }

};

export const setLayoutAC = (layout) => ({type: SET_LAYOUT, layout: layout});
export const isKnowSizeAC = (knowSize) => ({type: IS_KNOW_SIZE, knowSize: knowSize});
export const setSizeAAC = (size) => ({type: SET_SIZE_A, size: size});
export const setSizeBAC = (size) => ({type: SET_SIZE_B, size: size});
export const setSizeCAC = (size) => ({type: SET_SIZE_C, size: size});




export const updatePhotoAC = (fileName) => ({type: UPDATE_PHOTO, fileName: fileName});

export const setIsVisibleAC = (setIsVisible) => ({type: SET_IS_VISIBLE, setIsVisible: setIsVisible});

//экшены на сброс показаных пользователей и отоброжение новых, работают с UserInfoReducer!!!!!
export const resetListAC = () => ({type: "RESET_USER_LIST"});


// export const getTokenThunkCreator = () => {
//     return (dispatch) => {
//         API.getToken()
//             .then(data => {
//                 dispatch(setTokenAC(data));
//             })
//     }
// };




export default OrderReducer;