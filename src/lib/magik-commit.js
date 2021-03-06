'use strict';

/**
 * use magik-hooks to handle Git hooks manipulation
 *
 * @access private
 * @link https://github.com/magikMaker/magik-hooks
 * @type {{create: module.exports.create, remove: module.exports.remove}}
 */
const magikHooks = require('magik-hooks');

/**
 * Constants to change the text colours in `stdout`, use `ANSI_COLOURS.RESET`
 * to reset to default.
 *
 * @example
 * <code>
 * process.stdout.write(`${ANSI_COLOURS.YELLOW}text in yellow${ANSI_COLOURS.RESET}`);
 * </code>
 * @access private
 * @type {{BLACK: string, BLUE: string, CYAN: string, DEFAULT: string, GREEN: string, MAGENTA: string, RED: string, RESET: string, WHITE: string, YELLOW: string}}
 */
const ANSI_COLOURS = {
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

/**
 * Identifier used by magik-hooks
 *
 * @access private
 * @type {string}
 */
const id = 'magik-commit';

/**
 * Automagically adds the Jira issue ID to the commit message, a Jira issue ID
 * has the following format `JIRA-42`. So it starts with capital letters
 * followed by a dash and then a number, for instance `XXX-42`. The ticket ID
 * is parsed from the Git branch name that is currently active
 *
 * examples of possible branch names, assuming ticket ID is JIRA-42
 * - JIRA-42
 * - JIRA-42-description-here
 * - feature-JIRA-42
 * - feature-JIRA-42-description-here
 * - feature/JIRA-42
 * - feature/JIRA-42-description-here
 * - feature_JIRA-42
 * - feature_JIRA-42-description-here
 * @type {{create: module.exports.create, remove: module.exports.remove}}
 */
module.exports = {

    /**
     * Creates a Git hook which will prepend the Jira ticket ID into the commit
     * message
     *
     * @access public
     * @returns {void}
     */
    createCommitMessageHook: function() {
        const commands = [
            'COMMIT_MSG=$1',
            'addBranchName() {',
            '  NAME=$(git branch | grep \'*\' | sed -nE \'s/\\* (.+(\\/|-|_))?([A-Z]+-[0-9]+).*/\\3/p\')',
            '  echo "$NAME $(cat $COMMIT_MSG)" > $COMMIT_MSG',
            '}',
            'MERGE=$(cat $COMMIT_MSG | grep \'^Merge\' | wc -l)',
            'if [ $MERGE -eq 0 ] ; then',
            '  addBranchName',
            'fi'
        ];

        // create the actual hook
        magikHooks.create('prepare-commit-msg', commands.join('\n'), id);
        process.stdout.write(`${ANSI_COLOURS.GREEN}\n✔ magik-commit installed: prepare-commit-msg Git hook created.\n\n${ANSI_COLOURS.RESET}`);
    },

    /**
     * Removes the commit message git hook
     *
     * @access public
     * @returns {void}
     */
    removeCommitMessageHook: function(){
        magikHooks.remove('prepare-commit-msg', id);
        process.stdout.write(`${ANSI_COLOURS.GREEN}\n✔ magik-commit uninstalled: prepare-commit-msg Git hook removed\n\n${ANSI_COLOURS.RESET}`);
    }
};
