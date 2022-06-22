type ui = {
    page: number;
    isLoading: boolean;
};

type loginForm = {
    username: string;
    selectedLanguage: string;
    password: string;
};

type claimForm = {
    clmNumber: number;
};

interface RootState {
    loginForm?: loginForm;
    claimForm?: claimForm;
    ui: ui;
}

export default RootState;
