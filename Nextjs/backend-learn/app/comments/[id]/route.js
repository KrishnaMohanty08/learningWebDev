import {comments} from "../data";

//find 
export async function GET(_request,{params}){
    const {id} =await params;
    const comment =comments.find((comment)=>comment.id===parseInt(id));
    return Response.json(comment);
}
//updated comment
export async function PATCH(request,{params}){
    const {id} =await params;
    const body=await request.json();
    const {text}=body;

    const index=comments.findIndex((comment)=>
        comment.id===parseInt(id));

    comments[index].text=text;
    return Response.json(comments[index]);
}
// export async function DELETE(request,{params}) {
//     const {id} =await params;
//     const index=comments.findIndex((com)=>com.id===parseInt(id));
//     const deletedComment = comments.splice(index, 1);

//     return Response.json({
//             message: "Comment deleted",
//             deletedComment
//         });
    
// }
export async function DELETE(_request, { params }) {
    try {
        const { id } = params; // No need for await here
        const index = comments.findIndex(com => com.id === parseInt(id));

        // Handle comment not found
        if (index === -1) {
            return new Response(JSON.stringify({ error: "Comment not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Remove comment from array
        const deletedComment = comments.splice(index, 1)[0];
        
        return Response.json({
            message: "Comment deleted",
            deletedComment
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: "Invalid request" }), {
            status: 400,
            headers: { "Content-Type": "application/json" }
        });
    }
}
