const initState={
    projects:[
        {id:1,title:'abc',content:'hey'},
        {id:2,title:'def',content:'hey'},
        {id:3,title:'xyz',content:'hey'}
    ]
};

const projectReducer = (state=initState,action)=>{

    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('projectcreated',action.project);
            return state;
        case 'CREATE_PROJECT_ERR':
            console.log('carete project err',action.err);
            return state;   
        default : return state;     
    }
   
   
}
export default projectReducer;