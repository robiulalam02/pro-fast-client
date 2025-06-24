import axios from "axios";

export const imageUploadAPI = async (imageData) => {
    const formData = new FormData();
    formData.append('image', imageData[0]);

    const uploadData = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API_KEY}`, formData);


    return uploadData.data.data.display_url;
}

export const calculateCost = (type, recieverCenter, weight, senderCenter) => {
    const isWithinCity = senderCenter === recieverCenter;
    let cost = 0

    if (type === "document") {
        cost = isWithinCity ? 60 : 80;
    } else if (type === "non-document") {
        if (weight <= 3) {
            cost = isWithinCity ? 110 : 150;
        } else {
            const extraWeight = weight - 3;
            const extraCharge = Math.ceil(extraWeight) * 40;

            if (isWithinCity) {
                cost = 110 + extraCharge;
            } else {
                cost = 150 + extraCharge + 40;
            }
        }
    }

    return cost;
};

export const generateTrackingId = () => {
    const now = new Date();

    const timestamp = now
        .toISOString()
        .replace(/[-:T.Z]/g, "")
        .slice(0, 14);

    const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();

    return `TRK-${timestamp}-${randomPart}`;
}
