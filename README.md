# @buji/semver

[![Build Status](https://travis-ci.com/ah-yu/semver.svg?token=6VsD32U8ZGNpu2Nd2bZq&branch=master)](https://travis-ci.com/ah-yu/semver)
[![codecov](https://codecov.io/gh/ah-yu/semver/branch/master/graph/badge.svg?token=BkcUDCBCw0)](https://codecov.io/gh/ah-yu/semver)

## Install

```bash
npm i @buji/semver --save-dev
```

## Quick Start

```js
const semver = new SemVer(version);
semver.isProd(); // return production version or not
semver.isDev(); // return dev version or not
```

## Version

(major,minor,patch)

- if the minor number is even ,the version is production version
- if the minor number is odd, the version is dev version
