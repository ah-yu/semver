import {
  SemVer as SemVerBase,
  // eslint-disable-next-line no-unused-vars
  Options as SemVerOptions,
  minor
} from 'semver';

export function prod(version: string | SemVer): boolean {
  if (typeof version === 'string') {
    version = new SemVer(version);
  }
  return version.isProd;
}

export function dev(version: string): boolean {
  return !prod(version);
}

export class SemVer extends SemVerBase {
  public isProd: boolean;
  public isDev: boolean;

  constructor(
    version: string | SemVer,
    optionsOrLoose?: boolean | SemVerOptions
  ) {
    super(version, optionsOrLoose);

    const minorVersion = minor(version);

    this.isProd = minorVersion % 2 === 0; // production release
    this.isDev = !this.isProd;
  }
}
