
export const generateMockData = (count = 30000) => {
    return Array.from({ length: count }, (_, index) => ({
        name: `User_${index + 1}`
    }));
};

export const data = generateMockData();