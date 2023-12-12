async function createUser(authToken: string) {

    const res = await fetch(process.env.NEXT_PUBLIC_API_LOCAL_URL + "user", {
        method: "POST",
        headers: {
            "auth_token": authToken
        }
    })

    const data = await res.json();

    return data;
}

async function getUserInfo(userId: string, authToken: string) {

    const res = await fetch(process.env.NEXT_PUBLIC_API_LOCAL_URL + "user/" + userId, {
        headers: {
            "auth_token": authToken
        }
    })

    const data = await res.json();

    return data;
}

const userFunctions = {
    getUserInfo,
    createUser
}

export default userFunctions;