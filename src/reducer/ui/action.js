export const CHANGE_POST_MODAL = "CHANGE_POST_MODAL";
export const CHANGE_COMMENT_MODAL = "CHANGE_COMMENT_MODAL";
export const CHANGE_SELETE_ID = "CHANGE_SELETE_ID";
export const CHANGE_SELETE_CATEGORY = "CHANGE_SELETE_CATEGORY";

export const changePostModal = (open) => {
    return {
        type: CHANGE_POST_MODAL,
        open
    }
};

export const changeCommentModal = (open) => {
    return {
        type: CHANGE_COMMENT_MODAL,
        open
    }
};

export const changeSeleteId = (id) => {
    return {
        type: CHANGE_SELETE_ID,
        id
    }
};

export const changeSeleteCategory = (category) => {
    return {
        type: CHANGE_SELETE_CATEGORY,
        category
    }
};
