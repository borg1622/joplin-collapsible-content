import joplin from 'api';
import { MenuItemLocation, ToolbarButtonLocation } from 'api/types';
import { ContentScriptType } from 'api/types';


const pluginName = "Insert collapsible PDF";

joplin.plugins.register({
    onStart: async function() {
        console.info('Plugin ' + pluginName + 'started');
/*
        await joplin.contentScripts.register(
			ContentScriptType.CodeMirrorPlugin,
			'matchHighlighter',
			'./joplinMatchHighlighter.js'
		);
*/
        await joplin.commands.register({
            name: 'insertCollapsiblePdfSnippet',
            label: 'Attach collapsible PDF',
            iconName: 'far fa-file-pdf',
            execute: async () => {
                const sel = await joplin.commands.execute('selectedText');
                alert('selected Text: ' + sel);
                await joplin.commands.execute('replaceSelection', sel+'#');

                /*
                await joplin.commands.execute('editor.execCommand', {
                    name: 'madeUpCommand', // CodeMirror and TinyMCE
                    args: [], // CodeMirror and TinyMCE
                    ui: false, // TinyMCE only
                    value: '', // TinyMCE only
                });*/
                /*
                const cursor = editorRef.current.getCursor();
							const pos = cursorPositionToTextOffset(cursor, props.content);

							const newBody = await commandAttachFileToBody(props.content, null, { position: pos });
							if (newBody) editorRef.current.updateBody(newBody);
                // commandAttachFileToBody
                */
                /*
                const newBody = await joplin.commands.execute('editor.execCommand', {
                                name: 'commandAttachFileToBody',
                                args: ['oldContent', null, {position: 0} ],
                                ui: true,
                                value: ''
                            });
                const newBody = await joplin.commands.execute('commandAttachFileToBody', ['oldContent', null, {position: 0} ]);
                alert('new Body: ' + newBody);
                const { dialog } = require('electron')
                    console.log(dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }))
                */
                //await joplin.commands.execute('attachFile');
            },
        });

        // Add the second command to the editor toolbar
		await joplin.views.toolbarButtons.create('icpButton1', 'insertCollapsiblePdfSnippet', ToolbarButtonLocation.EditorToolbar);



    },
});
