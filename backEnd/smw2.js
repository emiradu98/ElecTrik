const conn = new WebSocket('ws://localhost:8079');

conn.onopen = () => {
    conn.send('salut!');
}

conn.onmessage = (e) => {
    console.log(e.data);
}