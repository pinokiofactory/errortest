module.exports = {
  run: [
    {
      "method": "shell.run",
      "params": {
        "venv": "env",
        "message": "pip install torch==2.3.1 torchvision==0.18.1 torchaudio==2.3.1 xformers",
//        "on": [{
//          "event": "/error: subprocess-exited-with-error/i",
//          "debug": true
//        }]
//        "error": [{
//          "event": "/error: subprocess-exited-with-error/i"
//        }]
      }
    },
  ]
}

