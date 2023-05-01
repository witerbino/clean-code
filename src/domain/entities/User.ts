interface UserProps {
  name: string;
  age: number;
}

export class User {
  private _props: UserProps;

  private constructor(props: UserProps) {
    this._props = props;
  }

  static create(data: UserProps) {
    return new User(data);
  }

  public isValid(): boolean {
    if (this._props.name === null || this._props.name === '')
      return false;

    if (this._props.age === null || this._props.age <= 0)
      return false;

    return true;
  }

  get name() {
    return this._props.name;
  }

  get age() {
    return this._props.age;
  }
}
