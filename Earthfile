VERSION 0.8

FROM ubuntu:22.04

PROJECT earthly-sa/portfolio





build-site:
    FROM node:20-alpine
    WORKDIR /gh-repo
    COPY --dir ./ipage ./ipage
    COPY ./index.html .
    WORKDIR /gh-repo/ipage
    RUN npm install && npm run build
    WORKDIR /gh-repo

    SAVE ARTIFACT /gh-repo



build-gh-test-site:
    FROM python:3.8-alpine3.19
    WORKDIR /app
    COPY +build-site/gh-repo ./gh-repo
    WORKDIR /app/gh-repo
    CMD ["python3", "-m", "http.server"]
    SAVE IMAGE gh-test-site:latest


push-to-gh:
    ARG --required github_token
    WORKDIR /app
    RUN apt-get update && apt-get install -y git
    COPY +build-site/gh-repo ./gh-repo
    WORKDIR /app/gh-repo 
    RUN git config --global user.email "root@buildkitsandbox.earthly"
    RUN git config --global user.name "bot"
    RUN git init
    RUN git add .
    RUN git commit -m "Automated gh-page build"
    RUN git checkout -b gh-page
    RUN git remote add origin https://rishikesavanramesh:$github_token@github.com/rishikesavanramesh/rishikesavanramesh.github.io.git
    RUN git push -f origin gh-page