export async function GET(request) {
    const Users = [
        {name: "Matthew", age: 31}, 
        {name: "antoine", age: 5}


    ]
    return new Response(JSON.stringify(Users))
}