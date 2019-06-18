import * as assert from 'assert';
import { SemVer } from './semver';

describe('semver', () => {
  const VERSION_ISPROD_LIST: Array<[string, boolean]> = [
    ['0.0.0', true],
    ['0.0.1', true],
    ['0.1.0', false],
    ['0.1.1', false],
    ['0.2.0', true],
    ['0.2.1', true]
  ];

  it('isProd function', () => {
    for (const [version, isProd] of VERSION_ISPROD_LIST) {
      const semVer = new SemVer(version);
      assert.deepEqual(
        semVer.isProd,
        isProd,
        `version(${version}) should ${isProd ? '' : 'not'} be production version`
      );
    }
  });
  it('isDev function', () => {
    for (const [version, isProd] of VERSION_ISPROD_LIST) {
      const semVer = new SemVer(version);
      assert.deepEqual(semVer.isDev, !isProd, `version(${version}) should ${!isProd ? '' : 'not'} be dev version`);
    }
  });
});
