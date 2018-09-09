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
	toolbar1 : 'formatTitle | bold italic | backcolor | fontsizeselect | undo redo',
	toolbar2 : 'tableTitle | insertTable | insertRowAfter deleteRow | insertColAfter deleteCol',  //工具栏声明 new
	toolbar3 : 'logicTitle | dot wedge horseshoe tilde triplebar exist',
	menubar : false,
	table_advtab : false,
    //new 
    table_appearance_options: false,
	table_default_styles : {           
		width : '100%',
        Height : 1000,
        borderStyle : 'solid',
        borderCollapse : 'collapse',
        borderColor : '#000000',
        //adjustWidth : 'false',
         textAlign : 'Center',
        fontsize: '20pt',
	},
    table_default_attributes: {
        width : '100%',
        height : 200,
        border: 1,
    },   
    object_resizing: false,
    //new-end
	table_default_border : 1,
	//table_toolbar: "tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol",
	table_toolbar: "",
	//object_resizing: false,
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