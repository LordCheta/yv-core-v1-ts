import userTransformer from "../transformers/user";
import User from "../data/user";



const getUserByApiKey = async (apiKey: string) => {
    try {
        return  await User.getUser("api_key", apiKey);

    } catch (e) {
        throw e;
    }
}

const getUserProfile = async (user: any, includes: any) => {
    try {
        const [userData, partnerData,] = await Promise.all([User.getUserById(user.id)]);

        return userData;

    } catch (e) {

    }
}

export default {
    getUserProfile,
    getUserByApiKey
}
