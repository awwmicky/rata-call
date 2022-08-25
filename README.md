# RATA - (RESTful API Tool App)

[portfolio-link]: https://rebrand.ly/michael-f-alvarez__portfolio
[portfolio-badge]: https://img.shields.io/website-up-down-sucess-important/https/aww-micky.web.app/?style=for-the-badge
<div align="center">
	<img alt="logo" width="150em" src="./public/favicon.png" />
	<h2><code>The Developer Experience (DX)</code></h2>
</div>

<div align="center">
	<a
	title="Open web app 🔗"
	target="_blank"
	href="https://the-rata-devtool-app.netlify.app/"
	><img
		alt="web-app-build-status"
		src="https://img.shields.io/website-up-down-sucess-important/https/the-rata-devtool-app.netlify.app/?style=for-the-badge"
		/>
	</a>
</div>

```
TL;DR

what is it?    :: a simplified API devtool
why use it?    :: to track & test API results
who is it for? :: developers who wants a better API review process
```

## Project Scope

Contributors : solo

Timeframe : ~2 weeks

Acceptance Criteria

<!-- definition of done -->

- is it mobile responsive?
- can I send & retrieve data?
- can I manage all input data?
- can I copy inputs & outputs?

Success Criteria

<!-- goals & deliverables -->

- keeping the code quality & format
- keeping the direction MVP proof
- having clear & intuitive functionality

<details>
<summary>
<b>Summary | Goal | Results</b>
</summary>
<br />
<!-- business objective :: client -->

### Summary

- I helped build a straightfoward devtool enabling developers to monitor & test API results

### Goal

- Create an MVP that sends a request & retrieves a response of data while managing input fields

### Results

- Users can now track data & be saved as cache storage to revisit quickly at anytime

</details>

<!--  -->

<details>
<summary>
<b>Background | Challenge | Solution</b>
</summary>
<br />
<!-- business story :: user -->

### Background

- In the developer world, they need to always test & implement APIs into their digital product
- As a developer, they need to repeat & call http requests to validate & verify product is working
- There can be a tool that speeds up the review time.
- e.g. Postman, Insomnia, Swagger.io

### Challenge

- how many steps does it take to make a http request?
- what inputs are required to fullfill a request?
- how can you retrieve previous fetched data?

### Solution

- save every request entry into the cache
- save format field entry & be swappable

</details>

<!--  -->

<details>
<summary>
<b>Features & Benefits</b>
</summary>
<br />

1. =

   - feature :: track & record every sent request made
   - benefit :: you are able to review API quicker

2. =

   - feature :: format & copy request inputs as table/json
   - benefit :: maintain & choose input options you prefer

3. =

   - feature :: view & copy response outputs
   - benefit :: able to share results with others

</details>

<!--  -->

<details>
<summary>
<b>Product Requirements</b>
</summary>
<br />
<!-- necessary demands -->

### URL Bar Form

- react-hook-form to manage state

  - collect method (select input) & url (text input)
  - submit button to validate
  - color-style border-top card & submit button based on method

- react-query to manage async

  - fetch query data
    - requires: url, method
    - optional: query (searchParams), body (json)
  - save data to cache

- zustand to store global states

  - save results (response data)
  - manage records (request options)

- format request data

  - handle contract & payload
  - get response results | errors
  - format as `{ metadata, headers, data }`

### Request Data

- tab options

  - w/ mantine ui & hooks
  - to choose query, body panel

- format options

  - w/ mantine ui
  - switch format options while maintaining field data
  - save format record w/ zustand

- table format

  - rearrange row w/ dnd-kit (drag-n-drop support feature)
  - enter key & value text inputs
  - toggle show checkbox input, disable key_value row
  - remove key_value row
  - parse to object format

- json format

  - edit json w/ codemirror (code editor support feature)
  - copy to clipboard w/ mantine hook
  - reset json
  - parse to object format

### Response Data

- tab options

  - w/ mantine ui & hooks
  - to choose body, headers panel

- display metadata

  - default as `---`
  - show `statusText, durationTime, payloadSize`
  - color-style `statusText` badge

- body panel

  - display data
  - read-only json w/ codemirror (code editor support feature)
  - copy to clipboard w/ mantine hook

- headers panel

  - display headers
  - format as table w/ key & value col

</details>

<br /> <!--  -->

<details>
<summary>
<i>My Process & Game Plan</i>
</summary>
<br />

### General Priority

1. create folder structure & naming conventions
2. setup config for each technology requirement (e.g. Routes, Providers)
3. build UI components

   - layout components (e.g. PageLayout, Header, Footer)
   - core & shared components (e.g. Icon, Form, Group)

4. build UI features

   - URL Bar Form
   - Request Data
   - Response Data

5. refactor & organize the code
6. refine & polish the UI
7. add metadata
8. write the case study
   <!-- add to resume, portfolio social profile -->
   <!-- document as WIP content -->

### My Approach

- each day, work on a different focus point

  - isolate/collaborate on a single objective
  - note down ideas for other tasks
  - keep the project interesting & refreshing

- creative flow

  - if I have an instance of a clear & better approach, I go for it
  - if not, build up to a feasible approach as a starting point
  - if I don't know know at all, I'll just walk, dance, cook, or clean 🎈

- problem space

  - visualize a clear user story per task
  - consider the use case scenarios
  - prioritize the task scope & budget time

- ideation space

  - research & experiment the technologies used
  - limit the toolset for intentional/interactive requirements & expectations
  - keep it proof-of-concept first then move into MVP

- solution space

  - organize, modularize, & scale the code base
  - content → logic → style

</details>

<!--  -->

<details>
<summary>
<i>Future Enhancements & Technical Improvements</i>
</summary>
<br />

### Future Enhancements

- have a timeline/history of sent requests

- have a 'save to collection' for request url, method, inputs

- add params & header to request data tab options

- add validate data section, limit the options to validate per request data input

- include options to save env, auth, cookie, local storage

- add info & doc to response data tab options

  - info :: url & data preview, cUrl preview, js fetch preview
  - doc :: use markdown (edit & preview) to document as api note

### Technical Improvements

- implement debounce to improve input onchange performance

- set better types on global state, async data, & form data

  - remove explicit any
  - for zustand, react-query, react-hook-form
  - include generic types

- figure out how to reduce motion violation

- include custom bash script

</details>

<br /> <!--  -->

## Tools & Technologies

<table>
<tr>
<td><b>Core</b></td>
<!-- Vite, TypeScript, React, Mantine UI, Zustand, React Query, React Hook Form, React Router -->
<td>
<a target="_blank" href="https://vitejs.dev/">
<img alt="Vite" src="https://img.shields.io/badge/Vite-B73BFE?logoColor=FFD62E&style=for-the-badge&logo=vite" />
</a>
<a target="_blank" href="https://www.typescriptlang.org/">
<img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?logoColor=FFFFFF&style=for-the-badge&logo=typescript" />
</a>
<a target="_blank" href="https://reactjs.org/">
<img alt="React" src="https://img.shields.io/badge/React-00D8FF?logoColor=20232A&style=for-the-badge&logo=react" />
</a>
<a target="_blank" href="https://ui.mantine.dev/">
<img alt="Mantine UI" src="https://img.shields.io/badge/Mantine_UI-339AF0?logoColor=FFFFFF&style=for-the-badge&logo=addthis" />
</a>
<a target="_blank" href="https://react-query.tanstack.com/">
<img alt="React Query" src="https://img.shields.io/badge/React_Query-FF4154?logoColor=FFD94C&style=for-the-badge&logo=react-query" />
</a>
<a target="_blank" href="https://react-hook-form.com/">
<img alt="React Hook Form" src="https://img.shields.io/badge/React_Hook_Form-EC5990?logoColor=FFFFFF&style=for-the-badge&logo=react-hook-form" />
</a>
<a target="_blank" href="https://reactrouter.com/">
<img alt="React Router" src="https://img.shields.io/badge/React_Router-CA4245?logoColor=FFFFFF&style=for-the-badge&logo=react-router" />
</a>
<a target="_blank" href="https://zustand-demo.pmnd.rs/">
<img alt="Zustand" src="https://img.shields.io/badge/Zustand-716257?logoColor=FFFFFF&style=for-the-badge&logo=addthis" />
</a>
</td>
</tr>

<tr>
<td><b>Support</b></td>
<!-- Ky, Zod, DnD-Kit, CodeMirror, JSON-Server, React Hot Toast, React Error Boundary, tabler/icons, iconify/react -->
<td>
<a target="_blank" href="https://npmjs.com/package/ky">
<img alt="Ky" src="https://img.shields.io/badge/Ky-F1423D?logoColor=FFFFFF&logo=addthis" />
</a>
<a target="_blank" href="https://zod.dev/">
<img alt="Zod" src="https://img.shields.io/badge/Zod-3068B7?logoColor=FFFFFF&logo=addthis" />
</a>
<a target="_blank" href="https://dndkit.com/">
<img alt="DnD-Kit" src="https://img.shields.io/badge/DnD--Kit-000000?logoColor=FFFFFF&logo=addthis" />
</a>
<a target="_blank" href="https://codemirror.net/">
<img alt="CodeMirror" src="https://img.shields.io/badge/CodeMirror-FFFFFF?logoColor=000000&logo=codemirror" />
</a>
<a target="_blank" href="https://npmjs.com/package/json-server">
<img alt="JSON Server" src="https://img.shields.io/badge/JSON--Server-1E3A8A?logoColor=FFFFFF&logo=json" />
</a>
<a target="_blank" href="https://react-hot-toast.com/">
<img alt="React Hot Toast" src="https://img.shields.io/badge/React_Hot_Toast-E15549?logoColor=FFFFFF&logo=addthis" />
</a>
<a target="_blank" href="https://npmjs.com/package/react-error-boundary">
<img alt="React Error Boundary" src="https://img.shields.io/badge/React_Error_Boundary-230000?logoColor=FFFFFF&logo=npm" />
</a>
<a target="_blank" href="https://tablericons.com/">
<img alt="Tabler Icons" src="https://img.shields.io/badge/Tabler_Icons-2D89EF?logoColor=FFFFFF&logo=addthis" />
</a>
<a target="_blank" href="https://iconify.design/">
<img alt="Iconify" src="https://img.shields.io/badge/Iconify-1769AA?logoColor=FFFFFF&logo=iconify" />
</a>
</td>
</tr>

<tr>
<td><b>Environment</b></td>
<!-- EditorConfig, ES Lint, Prettier, Husky, Lint Staged, Commitizen, Commitlint -->
<td>
<a target="_blank" href="https://editorconfig.org/">
<img alt="EditorConfig" src="https://img.shields.io/badge/EditorConfig-E0EFEF?logoColor=000&logo=editorconfig" />
</a>
<a target="_blank" href="https://eslint.org/">
<img alt="ESLint" src="https://img.shields.io/badge/ESLint-3A33D1?logoColor=FFF&logo=eslint" />
</a>
<a target="_blank" href="https://prettier.io/">
<img alt="Prettier" src="https://img.shields.io/badge/Prettier-1A2C34?logoColor=F7BA3E&logo=prettier" />
</a>
<a target="_blank" href="https://typicode.github.io/husky/#/">
<img alt="Husky" src="https://img.shields.io/badge/Husky-607D8B?logoColor=FFF&logo=addthis" />
</a>
<a target="_blank" href="https://npmjs.com/package/lint-staged">
<img alt="Lint-Staged" src="https://img.shields.io/badge/Lint--Staged-230000?logoColor=FFFFFF&logo=npm" />
</a>
<a target="_blank" href="https://commitizen-tools.github.io/commitizen/">
<img alt="Commitizen" src="https://img.shields.io/badge/Commitizen-121212?logoColor=FFFFFF&logo=addthis" />
</a>
<a target="_blank" href="https://commitlint.js.org/#/">
<img alt="Commitlint" src="https://img.shields.io/badge/Commitlint-121212?logoColor=FFFFFF&logo=commitlint" />
</a>
</td>
</tr>

<tr>
<td><b>Utilies</b></td>
<!-- VS Code, Git, GitHub, GitHub Actions, Figma Jam -->
<td>
<a target="_blank" href="https://code.visualstudio.com/">
<img alt="VS Code" src="https://img.shields.io/badge/VS_Code-0078D4?logoColor=FFF&logo=visual-studio-code" />
</a>
<a target="_blank" href="https://git-scm.com/">
<img alt="Git" src="https://img.shields.io/badge/Git-F05033.svg?logoColor=FFF&logo=git" />
</a>
<a target="_blank" href="https://github.com/">
<img alt="GitHub" src="https://img.shields.io/badge/GitHub-100000?logoColor=FFF&logo=github" />
</a>
<a target="_blank" href="https://github.com/">
<img alt="GitHub Actions" src="https://img.shields.io/badge/GitHub_Actions-100000?logoColor=FFF&logo=github-actions" />
</a>
<a target="_blank" href="https://figma.com/figjam/">
<img alt="Figma Jam" src="https://img.shields.io/badge/Figma_Jam-F24E1E.svg?logoColor=FFF&logo=figma" />
</a>
<a target="_blank" href="https://www.netlify.com/">
<img alt="netlify" src="https://img.shields.io/badge/Netlify-F24E1E.svg?logoColor=FFF&logo=netflify" />
</a>
</td>
</tr>
</table>
<!-- AddThis -->

<!--
add
- website up/down badge
- build size badge
-->
