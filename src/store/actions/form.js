
export const Types = {
    START_UPDATE: 'form/START_UPDATE',
    FINISH_UPDATE: 'form/FINISH_UPDATE',
    CANCEL_UPDATE: 'form/CANCEL_UPDATE',
    START_ADD: 'form/START_ADD',
    FINISH_ADD: 'form/FINISH_ADD',
    CANCEL_ADD: 'form/CANCEL_ADD'
}

export const Creators = {
    startUpdate: (product, list) => ({
        type: Types.START_UPDATE,
        product,
        list
    }),
    finishUpdate: () => ({
        type: Types.FINISH_UPDATE
    }),
    cancelUpdate: () => ({
        type: Types.CANCEL_UPDATE
    }),
    startAdd: list => ({
        type: Types.START_ADD,
        list
    }),
    finishAdd: () => ({
        type: Types.FINISH_ADD
    }), 
    cancelAdd: () => ({
        type: Types.CANCEL_ADD
    }),   
}