const API_KEY = 'DEMO_KEY'; // Using DEMO_KEY for simplicity. Rate limits apply.
const BASE_URL = 'https://api.nasa.gov/planetary/apod';

export const fetchAPOD = async () => {
    try {
        const response = await fetch(`${BASE_URL}?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Failed to fetch APOD data');
        }
        return await response.json();
    } catch (error) {
        console.error("NASA API Error:", error);
        // Fallback data if API fails (e.g. rate limit or offline)
        return {
            title: "Carina Nebula (Fallback View)",
            date: new Date().toISOString().split('T')[0],
            url: "https://images.nasa.gov/details-PIA23122", // Using a direct reliable image URL ideally, but let's use a reliable placeholder for now
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Hubble_ESA_Carina_Nebula.jpg/1200px-Hubble_ESA_Carina_Nebula.jpg",
            media_type: "image",
            explanation: "Due to high traffic on the NASA network, we are displaying this breathtaking view of the Carina Nebula. This complex nebula is one of the largest and brightest diffuse nebulae in our skies."
        };
    }
};
