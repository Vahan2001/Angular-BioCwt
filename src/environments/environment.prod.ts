export const host = 'http://localhost:3000';
export const environment = {
    production: true,
    woodUrl: {
        get: host + '/woodWorkDatas'
    },
    ourWorkUrl: {
        get: host + '/ourWorkDatas'
    }
};