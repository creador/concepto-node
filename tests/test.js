var args = require('minimist')(process.argv.slice(2));
var _file = '', _config = {}, _tmp = {};

//procesamos argumentos
if (args._.length>0) {
	// file argument specified without option
	_file=args._[0];
} else {
	// file argument specified using -f, process other flags too
	if ('f' in args) _file=args.f;	// -f file
	if ('c' in args) _config.cancelled=false; // -c remove cancelled nodes
}

// detect which dsl compiler to use
_tmp.dsl = require('path').basename(_file).split('.')[0];
_tmp.dsl = 'ti'; // dummy ti for testing
require('../lib/dsl_parser').init(_file, _config, function(tree, dsl_parser) {
	var dsl = require('../lib/'+_tmp.dsl+'/init');
	dsl.init(tree, dsl_parser, function(dsl_compiler) {
		console.log('compiler re:',dsl_parser);
		dsl_parser.getNode('ID_761689968', true, function(data) {
			console.log('testnode:',data);	
		});
		dsl_parser.getNodes({ text:'evaluar', attribute:'' }, function(results) {

		});
	});
});

// compile
/*
var testnodo = require('./concepto/ti/cmds/'+'slider'+'.js');
var resp = testnodo.onRun({	text_node: 	'comentario del nodo',
							attributes: { piopio:false} 
						  }, compiler.helpers);
console.log('test dice:',resp);*/