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
    case 'SET_CSV_DATA':
      return {
        ...state,
        csvData: action.payload
      }
    case 'SET_JSON_DATA':
      return {
        ...state,
        jsonData: action.payload
      }
    default:
      return state
  }
}