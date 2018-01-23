var fs = require('fs')

fs.readFile('/Users/mac/Downloads/qn-001.png',function(err,file){
	if (err) {
		console.error(err.stack)
	}
	console.log(file)
	console.log('读取文件完成~')
})
console.log('发起读取文件~')