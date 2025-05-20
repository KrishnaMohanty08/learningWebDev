export async function GET(request) {
    
    const authHeader = request.headers.get("authorization");
    console.log(authHeader);

    return new Response("Profile api data");
}
