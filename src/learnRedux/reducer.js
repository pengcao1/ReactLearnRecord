import React, { Component } from 'react'

 export const reducerAdd = (state = {}, action) => {
    switch (action.type) {
        case 'ACTION_TYPE':
            return {
                ...state,
                current: current +1,
            }
        default:
            return state
    }
}
