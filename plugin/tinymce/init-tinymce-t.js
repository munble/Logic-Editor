/**
 * Initialize TinyMCE editor for Truth Table
 * University of Pittsburgh IS2470 Fall 2017
 * Jeffrey James, Chakra Neopaney, Sanika Athaley, Wennong Song, John Falconi
 */

tinymce.init({
	selector : '#TruthTable',
	//width : 600,
	height : 300,
	theme : "modern",
	skin : "lightgray",
	branding : false,
	toolbar_items_size: 'large',
	plugins : 'table textcolor',
	toolbar1 : 'formatTitle | bold italic | backcolor | undo redo',
	toolbar2 : 'tableTitle | insertTable | insertRowAfter deleteRow | insertColAfter deleteCol',  //工具栏声明
	toolbar3 : 'logicTitle | dot wedge horseshoe tilde triplebar exist',
	menubar : false,
	table_advtab : false,
	table_default_styles : {
		width : '100%'
	},
	table_default_border : 1,
	//table_toolbar: "tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol",
	table_toolbar: "",
	object_resizing: false,
	textcolor_map : [ "FF6600", "Orange", "FFFF00", "Yellow", "00FFFF", "Aqua",
			"FF00FF", "Magenta" ],
	setup : function(editor) {
		editor.addButton( 'formatTitle', {
			text : 'Format',
			icon : false,
			//disabled: true,
			classes: 'button-title',
			onclick : function() {} 
		});
		editor.addButton( 'tableTitle', {
			text : 'Edit Table',
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
        
        // 工具栏按钮
        editor.addButton( 'insertTable', {
			icon : 'table',
			tooltip : "Insert Table",
			onclick : function() {
				tinymce.execCommand('mceInsertTable');
			} 
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
		editor.addButton( 'insertColAfter', {
			icon : 'tableinsertcolafter',
			tooltip : "Insert Column After",
			onclick : function() {
				tinymce.execCommand('mceTableInsertColAfter');
			} 
		});
		editor.addButton( 'insertColBefore', {
			icon : 'tableinsertcolbefore',
			tooltip : "Insert Column Before",
			onclick : function() {
				tinymce.execCommand('mceTableInsertColBefore');
			} 
		});
		editor.addButton( 'deleteCol', {
			icon : 'tabledeletecol',
			tooltip : "Delete Column",
			onclick : function() {
				tinymce.execCommand('mceTableDeleteCol');
			} 
		});		
		editor.addButton('dot', {
			text : '\xB7',
			icon : false,
			tooltip : "and",
			onclick : function() {
				editor.insertContent('&nbsp;&middot;&nbsp;');
			}
		});
		editor.addButton('wedge', {
			text : '\u2228',
			icon : false,
			tooltip : "or",
			onclick : function() {
				editor.insertContent('&nbsp;&or;&nbsp;');
			}
		});
		editor.addButton('horseshoe', {
			text : '\u2283',
			icon : false,
			tooltip : "if then",
			onclick : function() {
				editor.insertContent('&nbsp;&sup;&nbsp;');
			}
		});
		editor.addButton('tilde', {
			text : '\u223C',
			icon : false,
			tooltip : "not",
			onclick : function() {
				editor.insertContent('&nbsp;&sim;&nbsp;');
			}
		});
		editor.addButton('triplebar', {
			text : '\u2261',
			icon : false,
			tooltip : "if and only if",
			onclick : function() {
				editor.insertContent('&nbsp;&equiv;&nbsp;');
			}
		});
		editor.addButton('exist', {
			text : '\u2203',
			icon : false,
			tooltip : "there exists",
			onclick : function() {
				editor.insertContent('&nbsp;&exist;&nbsp;');
			}
		});
	}
});