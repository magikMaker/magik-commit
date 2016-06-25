magik-commit
------------
This adds the Jira issue id to the commit message. Make sure that the
issue id is in the branch name, this can easily be achieved by using the
'create branch' link on the issue's details page. 
([Bitbucket docs](https://confluence.atlassian.com/bitbucketserver/jira-integration-776639874.html))

Installation
------------
Install this in your project like this:
```bash
$ npm install --save-dev magik-commit
```

Usage
-----
After installation the Git commit messages you create are automagically 
augmented with the Jira issue ID.

Uninstall
---------
To uninstall, simply type this on the command line:
```bash
$ npm uninstall --save-dev magik-commit
```

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
