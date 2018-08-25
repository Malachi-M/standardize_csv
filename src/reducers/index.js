export default (state={ checked: {}}, action) => {
  switch(action.type) {
    case 'CSV_TO_EXPORT':
      return {
        ...state,
        csvExport: action.payload
      }
    case 'SET_CHECKBOX':
      return {
        ...state,
        checked: {
          ...state.checked,
          [action.payload]: !state.checked[action.payload]
        }
      }
    case 'CLEAR_CHECKBOX':
      return {
        ...state,
        checked: {}
      }
    case 'SET_CSV_DATA':
      return {
        ...state,
        csvData: action.payload
      }
    case 'SET_JSON_DATA':
      console.log('Reducer Set_JSON_DATA',action.payload)
      return {
        ...state,
        jsonData: {
          ...state.jsonData,
          ...action.payload
        }
      }
    default:
      return state
  }
}