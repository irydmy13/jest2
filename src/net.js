async function hello(name) {
    const trimmed = (name ?? "").trim();
    return trimmed ? `Hello, ${trimmed}` : "Hello,";
}

async function getPost(id, fetch) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const res = await fetch(url);
    if (!res.ok) {
        console.log('Error:${res.status}');
    } else {
        return res.json();
    }
}

module.exports = { getPost, hello};  