const { spawn } = require('child_process');
// const { WebSocketServer } = require("ws");
// const { watch } = require("fs");
// const path = require("path");


function cmd(program, args){
    const spawnOptions = {"shell": true};
    console.log('CMD:', program, args.flat(), spawnOptions);
    const p = spawn(program, args.flat(), spawnOptions);

    p.stdout.on('data', (data) => process.stdout.write(data));
    p.stderr.on('data', (data) => process.stderr.write(data));
    p.on('close', (code) => {
        if (code !== 0){
            console.error(program, args, 'exited with', code);
        }
    });
    return p;
}

cmd('tsc', ['-w'])
cmd('http-server', ['-p', '6969', '-a', '127.0.0.1', '-s', '-c-1'])