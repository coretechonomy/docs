# Website

Website is hosted at: https://docs.coretechonomy.com/.

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

---

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

---

# Algolia DocSearch
## Run the crawl from the Docker image

You can run a crawl from the packaged Docker image to crawl your website.

```bash
podman run -it --env-file=.env -e "CONFIG=$(cat docsearch-config.json | jq -r tostring)" algolia/docsearch-scraper
```

---

# Markdown Guides:

- https://docusaurus.io/docs/markdown-features
- https://www.markdownguide.org/basic-syntax/
