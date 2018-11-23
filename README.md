
Windows
git branch | findstr *
https://blogs.msdn.microsoft.com/zainnab/2007/07/08/grep-and-sed-with-powershell/
https://www.howtogeek.com/261591/how-to-create-and-run-bash-shell-scripts-on-windows-10/


magik-commit
============
[![NPM version](https://badge.fury.io/js/magik-commit.svg)](http://badge.fury.io/js/magik-commit)

Automagically adds the Jira ticket ID to the commit message. A Jira issue ID 
has the following format `JIRA-42`. So it starts with capital letters followed 
by a dash and then a number, for instance `XXX-42`. 

This script parses the ticket ID from the Git branch name from the currently
active branch. Examples of possible branch names, assuming ticket ID is `JIRA-42`.
- JIRA-42
- JIRA-42-description-here
- feature/JIRA-42
- feature/JIRA-42-description-here
- feature-JIRA-42
- feature-JIRA-42-description-here
- feature_JIRA-42
- feature_JIRA-42_description_here

The recommended format is: `feature/JIRA-42-description-here`.

To easily get the Jira Ticket ID in the branch name, use the 'create branch' 
link on the ticket's details page. This link is available after integrating
Bitbucket with Jira. For more information, see the [Bitbucket documentation](https://confluence.atlassian.com/bitbucketserver/jira-integration-776639874.html).

Installation
------------
Install this in your project like this:
```bash
$ npm install --save-dev magik-commit
```

Usage
-----
After installation the Git commit messages you create are automagically 
augmented with the Jira ticket ID.

Uninstall
---------
To uninstall, simply type this on the command line:
```bash
$ npm uninstall --save-dev magik-commit
```

Windows
-------
Please note that this package only runs on macOS and BSD/*nix type systems. If
you would like to run this on an unsupported OS, please 
[create a ticket](https://github.com/magikMaker/magik-commit/issues).

License
=======

Copyright (C) 2016 Bjørn Wikkeling (magikMaker)


Permission is hereby granted, free of charge, to any person obtaining a copy of 
this software and associated documentation files (the "Software"), to deal in 
the Software without restriction, including without limitation the rights to 
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
of the Software, and to permit persons to whom the Software is furnished to do 
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
THE AUTHORS OR COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
SOFTWARE.

Except as contained in this notice, the name(s) of the above copyright holders 
shall not be used in advertising or otherwise to promote the sale, use or other 
dealings in this Software without prior written authorization.
