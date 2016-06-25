'use strict';

/**
 * Creates a list of all Git contributors, sorts them and then adds them as
 * contributors to package.json
 */

var magikHooks = require('magik-hooks');

var ANSI_COLOURS = {
    BLACK: '\x1b[30m',
    BLUE: '\x1b[34m',
    CYAN: '\x1b[36m',
    DEFAULT: '\x1b[0m',
    GREEN: '\x1b[32m',
    MAGENTA: '\x1b[35m',
    RED: '\x1b[31m',
    RESET: '\x1b[0m',
    WHITE: '\x1b[37m',
    YELLOW: '\x1b[33m'
};

var id = 'magik-commit';

module.exports = {

    /**
     * Creates a Git hook which will write the Jira ticket ID into the commit
     * message
     *
     */
    createCommitMessageHook: function() {
        var commands = [
            'COMMIT_EDITMSG=$1',
            'addBranchName() {',
            '  NAME=$(git branch | grep \'*\' | sed \'s/* .*\\/\\([A-Z]*-[0-9]*\\).*/\\1/\')',
            '  echo "$NAME $(cat $COMMIT_EDITMSG)" > $COMMIT_EDITMSG',
            '}',
            'MERGE=$(cat $COMMIT_EDITMSG|grep \'^Merge\'|wc -l)',
            'if [ $MERGE -eq 0 ] ; then',
            '  addBranchName',
            'fi'
        ];

        // create the actual hook
        magikHooks.create('prepare-commit-msg', commands.join('\n'), id);
        process.stdout.write(`${ANSI_COLOURS.YELLOW}\n\rmagik-commit installed\n\r${ANSI_COLOURS.RESET}`);
    },

    /**
     * Removes the commit message git hook
     */
    removeCommitMessageHook: function(){
        magikHooks.remove('prepare-commit-msg', id);
        process.stdout.write(`${ANSI_COLOURS.YELLOW}\n\rmagik-commit uninstalled\n\r${ANSI_COLOURS.RESET}`);
    }
};
