const fs = require('fs')
const chalk = require('chalk')

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

global.session = process.env.SESSION_ID || "PUT HERE"; //enter your session id here

global.openaikey = process.env.OPEN_AI_KEY || "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"; //Put Your Open AI Api key

global.ownername = process.env.OWNER_NAME || "KUSHAN SEWMINA"; //Queen-AI Owner Name here

global.ownernumber = process.env.OWNER_NUMBER || "94725668277"; //Owner whatsapp number here

global.language = "EN"; //Enter bot working language EN = English / SI = Sinhala /ML = Malayalam

global.prefix = ['.'] //Don't Change

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("Update config.js"))
	delete require.cache[file]
	require(file)
})
