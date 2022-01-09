export default (state, action) => {
   switch(action.type) {
       case 'ADD_ITEM':
           console.log('ADD_ITEM')
           return {
                   textList: [{id:state.textList.length, text: action.payload}, ...state.textList]
           }
        default:
           return state;
   }
}