export class HTTJsonApiRemoteQiscus {
  protected base_uri: string

  constructor() {
    this.base_uri =
      'https://raw.githubusercontent.com/alfiankan/qiscus/refs/heads/master/fake_json_api'
  }

  public buildEndpoint(path: string): string {
    return `${this.base_uri}${path}`
  }
}
