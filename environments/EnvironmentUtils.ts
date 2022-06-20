const availableEnvirontments: Array<string> = ['development', 'uat', 'production'];
export const generateFilePath = (targetConf) => {
    for (const [key] of Object.entries(targetConf)) {
        if (availableEnvirontments.find((item) => item == targetConf[key])) {
            return targetConf[key];
        } else {
        }
    }
};
