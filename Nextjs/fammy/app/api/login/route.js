export async function GET(request){
    return new Response(JSON.stringify({message:'hello'}),{
        status:200,
        header:{'Content-Type':'application/json'},
    });
}