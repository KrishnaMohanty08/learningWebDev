import {comments} from "./data";

// export async function GET(){
//     return Response.json(comments);
// }
export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    // Properly return the filtered array
    const filteredComments = query
        ? comments.filter(comment => comment.text.includes(query))
        : comments;

    return Response.json(filteredComments);
}


export async function POST(request){
    const comment =await request.json()
    const newComment={
        id:comments.length+1,
        text:comment.text,
    };
    comments.push(newComment);
    return new Response(JSON.stringify(newComment),{
        headers:{"Content-Type":"application/json"},
        status:201,
    });
}
