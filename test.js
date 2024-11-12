module.exports = {
  run: [
    {
      "method": "shell.run",
      "params": {
        "venv": "env",
        "message": "pip install gradio==5.5.0 uvicorn==0.13.4"
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

