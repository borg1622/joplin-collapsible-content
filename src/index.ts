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
                const needle = /^\s*!?\[([^\]]+)\]\([^\)]+\).*$/m;
                const repl = sel.replace(needle, "<details close>\n<summary>Show $1 </summary>\n\n " + sel + " \n</details>\n")
                await joplin.commands.execute('replaceSelection', repl);
            },
        });

        // Add the second command to the editor toolbar
		await joplin.views.toolbarButtons.create('icpButton1', 'insertCollapsiblePdfSnippet', ToolbarButtonLocation.EditorToolbar);



    },
});
