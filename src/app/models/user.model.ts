export interface UserModel {
  readonly name: {
    readonly firstname: string;
    readonly lastname: string;
  }

  readonly email: string;
}
