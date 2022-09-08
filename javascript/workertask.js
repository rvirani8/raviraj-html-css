var btn = [] ,x;

self.addEventListener("message", function (e) {
  if (e.data == 0) {
    btn[e.data] = `<button onclick="startWorker()">start</button>`;
  } else {
    btn[e.data] = `<br><button onclick="startWorker()">${e.data}</button>`;
  }
  for(x=1 ; x<e.data ; x++){
   btn[e.data] += `<span>${x}</span>`;
  }
  postMessage(btn[e.data]);
});
