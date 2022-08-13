const MenuDocsClient = require('./Structures/MenuDocsClient.js');
const config = require('../config.json');

const client = new MenuDocsClient(config);
client.start();