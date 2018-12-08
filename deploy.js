const http = require('http')
const shell = require('shelljs')
const port = 12315

const server = http.createServer((req, res) => {
	if (req.url === '/deploy' && req.method === 'post') {
		if (!shell.which('git')) {
			shell.echo('Sorry, this script requires git')
			shell.exit(1)
		} else {
			shell.echo('----- Deploy Start -----\n')
			shell.exec('git pull')
			shell.exec('pm2 restart hook-test')
			shell.echo('----- Deploy End -----\n')
			shell.exit(0)
		}
		res.setHeader('content-type', 'application/json')
		res.end({
			success: true
		})
	}
	res.end('hello world, again!')
})

server.listen(port, () => {
	console.log(`Server listening on port: ${port}`)
})
