module.exports = {
	specs	: 	{
		name 		: 	'Appcelerator Titanium - Alloy MVC Compiler',
		author 		: 	'Pablo Schaffner',
		update 		: 	'3/9/2016'
	},
	helpers	: 	{
		reply_template : function(obj) {
			var resp = { open:'', close:'' };
			if ('hasChildren' in obj) {
				resp.open = '{';
				resp.close = '}';
			}
			return resp;
		},
		_ : require('underscore')
	},
	_tmp 	: 	{},
	info 	: 	function() {
		return specs;
	},
	init	: 	function(filetree, parser, callback) {
		// get cmds tree
		var _me = this;
		console.time('recover_cmds');
		_me._tmp.cmds = require('directory-tree')('../lib/ti/cmds/',['.js']).children;
		console.timeEnd('recover_cmds');
		callback(_me);
	},
	readCentralConfig 	: 	function(cb) {

	},
	findMethodValid4Eval : function(node, cb) {
		// given current node, searches _me._tmp.cmds directories for a valid cmd.
		console.time('findMethodValid4Eval');
		var resp = '';
		console.timeEnd('findMethodValid4Eval');
		return resp;
	}
};