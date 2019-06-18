import { SemVer as SemVerBase, Options, minor } from 'semver';

export class SemVer extends SemVerBase {
  public isProd: boolean;
  public isDev: boolean;

  constructor(version: string | SemVer, optionsOrLoose?: boolean | Options) {
    super(version, optionsOrLoose);

    const minorVersion = minor(version);

    this.isProd = minorVersion % 2 === 0;
    this.isDev = !this.isProd;
  }
}
