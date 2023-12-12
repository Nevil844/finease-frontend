import Investment from "@/models/Investment";
import { jwtDecode } from "jwt-decode";

async function postInvestment(authToken: string, investment: Investment) {

    const decode = jwtDecode(authToken);
    console.log(investment);

    const userId = decode.sub;
    const res = await fetch(process.env.NEXT_PUBLIC_API_LOCAL_URL + "user/" + userId + "/investment", {
        method: "POST",
        headers: {
            "auth_token": authToken
        },
        body: JSON.stringify(investment)

    })

    const data = await res.json();


    return data;
}


const InvestmentService = {
    postInvestment
}
export default InvestmentService;