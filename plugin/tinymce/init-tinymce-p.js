/**
 * Initialize TinyMCE editor for Proof
 * University of Pittsburgh IS2470 Fall 2017
 * Jeffrey James, Chakra Neopaney, Sanika Athaley, Wennong Song, John Falconi
 */

tinymce.init({
	selector : '#Proof',
	// width : 600,
	height : 300,
	theme : "modern",
	skin : "lightgray",
	branding : false,
	toolbar_items_size : 'large',
	plugins : 'table',
	toolbar1 : 'formatTitle | bold italic | backcolor | fontsizeselect | undo redo',
	toolbar2 : 'tableTitle | insertRowAfter deleteRow',
	toolbar3 : 'logicTitle | dot wedge horseshoe tilde triplebar exist | pipe',
	menubar : false,
	table_advtab : false,
	table_default_styles : {
		width : '100%'
	},
	table_default_border : 0,
	table_toolbar: "",
	object_resizing: false,
	textcolor_map : [ "FF6600", "Orange", "FFFF00", "Yellow", "00FFFF", "Aqua",
			"FF00FF", "Magenta" ],
	setup : function(editor) {
        
        
        editor.shortcuts.add("alt+1", "input and", function() {
            editor.insertContent('&nbsp;&middot;&nbsp;')
        });
        
        editor.shortcuts.add("alt+2", "input or", function() {
            editor.insertContent('&nbsp;&or;&nbsp;')
        });
        
        editor.shortcuts.add("alt+3", "input if then", function() {
            editor.insertContent('&nbsp;&sup;&nbsp;')
        });
        
        editor.shortcuts.add("alt+4", "input not", function() {
            editor.insertContent('&nbsp;&sim;&nbsp;')
        });
        
        editor.shortcuts.add("alt+5", "input if and only if", function() {
            editor.insertContent('&nbsp;&equiv;&nbsp;')
        });
        
        editor.shortcuts.add("alt+6", "input there exists", function() {
            editor.insertContent('&nbsp;&exist;&nbsp;')
        });
         editor.shortcuts.add("alt+7", "input pipe", function() {
            editor.insertContent('|&nbsp;')
        });
        
		editor.addButton( 'formatTitle', {
			text : 'Format',
			icon : false,
			classes: 'button-title',
			onclick : function() {} 
		});
		editor.addButton( 'tableTitle', {
			text : 'Edit Rows',
			icon : false,
			classes: 'button-title',
			onclick : function() {} 
		});
		editor.addButton( 'logicTitle', {
			text : 'Logic Symbols',
			icon : false,
			classes: 'button-title',
			onclick : function() {} 
		});
		editor.addButton( 'insertRowAfter', {
			icon : 'tableinsertrowafter',
			tooltip : "Insert Row After",
			onclick : function() {
				tinymce.execCommand('mceTableInsertRowAfter');
			} 
		});
		editor.addButton( 'insertRowBefore', {
			icon : 'tableinsertrowbefore',
			tooltip : "Insert Row Before",
			onclick : function() {
				tinymce.execCommand('mceTableInsertRowBefore');
			} 
		});
		editor.addButton( 'deleteRow', {
			icon : 'tabledeleterow',
			tooltip : "Delete Row",
			onclick : function() {
				tinymce.execCommand('mceTableDeleteRow');
			} 
		});
		editor.addButton('dot', {
			text : '\xB7',
			icon : false,
			tooltip : "and, alt+1",
			onclick : function() {
				editor.insertContent('&nbsp;&middot;&nbsp;');
			}
		});
		editor.addButton('wedge', {
			text : '\u2228',
			icon : false,
			tooltip : "or, alt+2",
			onclick : function() {
				editor.insertContent('&nbsp;&or;&nbsp;');
			}
		});
		editor.addButton('horseshoe', {
			text : '\u2283',
			icon : false,
			tooltip : "if then, alt+3",
			onclick : function() {
				editor.insertContent('&nbsp;&sup;&nbsp;');
			}
		});
		editor.addButton('tilde', {
			text : '\u223C',
			icon : false,
			tooltip : "not, alt+4",
			onclick : function() {
				editor.insertContent('&nbsp;&sim;&nbsp;');
			}
		});
		editor.addButton('triplebar', {
			text : '\u2261',
			icon : false,
			tooltip : "if and only if, alt+5",
			onclick : function() {
				editor.insertContent('&nbsp;&equiv;&nbsp;');
			}
		});
		editor.addButton('pipe', {
			text : '|',
			icon : false,
			tooltip : "pipe, alt+7",
			onclick : function() {
				editor.insertContent('|&nbsp;');
			}
		});
		editor.addButton('exist', {
			text : '\u2203',
			icon : false,
			tooltip : "there exists, alt+6",
			onclick : function() {
				editor.insertContent('&nbsp;&exist;&nbsp;');
			}
		});
        
        
	}
});