export async function fetchMockData(startIndex, count = 50) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = Array.from({ length: count }, (_, i) => ({
                name: `User_${startIndex + i + 1}`,
            }));
            resolve(data);
        }, 1500); // Simulates a network delay of 1.5s
    });
}
