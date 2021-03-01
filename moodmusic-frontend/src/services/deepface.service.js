const configData = require('../config.json')

export const deepfaceService = {
    analyze
};

function analyze(base64Image) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
            img:[
                `${base64Image}`
            ]
        }
    };

    console.log("configData development url deepface", configData.development.DEEPFACE_URL)

    return fetch(`${configData.development.DEEPFACE_URL}/analyze`, requestOptions)
        .then(analysisData => {
            console.log("analysis Data received from deepface ", analysisData)
            return analysisData;
        });
}
