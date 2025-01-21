<div align="center">
    <img 
        src="./static/favicon.svg"
        alt="infoportal_logo"
        width=80
    />
    <p><a href="https://infoportal.app">INFOPORTAL.APP</a></p>
</div>

# Counting platform
This repository contains full solution implementation of the publicly available counting/voting station, allowing anonymous interaction with content of the platform.  
This codebase represents a variation of same concept, released as [web platform](https://github.com/vexy/infoportal) based on [smart contract](https://github.com/vexy/voting_platform).

Platform is open to anyone with valid GMail account.  
Website location: https://infoportal.app


## Platform features
- Signup with Google
- Add new question
- Browse and search list of questions
- Provide answers to questions
- Check answered question stats
- Anonymous interaction
- Usage statistics

> Current version: `1.3.1`

## TechStack
Platform is made using `SvelteKit` and `TypeScript`. It uses `node 20.x` as a runtime engine.

To get the website running locally, run:  
```bash
$ npm install  # wait to complete
$ npm run dev
```  

To build for `production` use (typical):
```bash
$ npm run build
```

Platform uses [Supabase](https://supabase.com) as the general backend system, but it can use any SQL backed processing engine. Check [this helper class](/src/lib/QuestionsService.ts) for more info.

### Contribution
Website design: [Aleksandra @ Behance](https://www.behance.net/aleksandrajolka)  
Initial React version: [turicam](https://github.com/turicam)

_Want to contribute_ ?  
Check out [project pages](https://github.com/users/vexy/projects/2) for more info on the actual issues.

### Licence
Licensed under GPL-3.0 license.  

----

Copyright © 2024 [Vexy](https:github.com/vexy) | GPL-3.0  
**PGP:** `5BC7030E A0380EA4 BB8A470E 9F4475B4 CF37D56A`

<p align="center">
    <!-- <code>Fridge</code> - <b>Lightweight</b>, <b>fast</b> and extreeemely <b>simple to use fetch or store mechanism.</b><br> -->
    <a href="https://stackexchange.com/users/215166"><img src="https://stackexchange.com/users/flair/215166.png?theme=clean" width="210" height="60" alt="Vexy on Stack Exchange, a network of free, community-driven Q&amp;A sites" title="profile for Vexy on Stack Exchange, a network of free, community-driven Q&amp;A sites">
    </a>
</p>
