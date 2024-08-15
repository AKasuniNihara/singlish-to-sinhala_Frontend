import api from './api.js'

export const getGeneratedData = () => {
    return api.get(
        `/generated_data/fetch`
    );
};

// Function to set (insert) generated data
export const setGeneratedData = (
    code_mix_input,
    pure_sinhala_output,
    is_valid,
    comment,
    updated_by
) => {
    // Create a data object to send as JSON
    const data = {
        code_mix_input,
        pure_sinhala_output,
        is_valid,
        comment,
        updated_by
    };

    // Send a POST request with the data object in the body
    return api.post('/generated_data/insert', data);
};

