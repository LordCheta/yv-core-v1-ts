import userTransformer from "../transformers/user";
import User from "../data/user";



// const getUserByApiK

const getuserProfile = async (user: any, includes: any) => {
    try {
        const [userData, partnerData,] = await Promise.all([User.getUserById(user.id)]);

    } catch (e) {

    }
}

export default {
    getuserProfile
}
