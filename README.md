# CareConnect

## Table of Contents
- [About](#about)
- [Technologies](#technologies)
- [Repositories](#repositories)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)

## About

CareConnect is a powerful solution for streamlining clinic management and enhancing patient experience. Our scalable, integrated web application helps medical professionals efficiently handle their day-to-day operations, from managing electronic health records and patient data to scheduling appointments and managing medical staff.

## Technologies

- Tech stack: Node.js, Express, Angular, and MongoDB
- DevOps: CircleCI, Netlify, Render

## Repositories

- Backend: [https://github.com/lanhhoang/care-connect-be](https://github.com/lanhhoang/care-connect-be)
- Frontend: [https://github.com/lanhhoang/care-connect-fe](https://github.com/lanhhoang/care-connect-fe)

## Getting Started

### Prerequisites

- npm

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone git@github.com:lanhhoang/care-connect-fe.git
```

2. Change directory

```sh
cd care-connect-fe
```

3. Install NPM packages

```sh
npm install
```

4. Prepare environment variables

```sh
cp .env.sample .env
```

Modify value of `API_ENDPOINT` to `localhost:3000` (default URL of backend)

5. Run development server

```sh
ng serve
```
