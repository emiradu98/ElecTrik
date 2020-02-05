const conn = new WebSocket('ws://localhost:8079')

conn.onopen = () => {
    conn.send('hey');
}

conn.onmessage = (e) => {
    console.log(e.data);
}