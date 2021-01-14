let params = (new URL(document.location)).searchParams;
let name = params.get("username");

console.log(name);