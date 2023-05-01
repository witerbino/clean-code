interface NewsProps {
  id?: string;
  title: string;
  content: string;
}

export class News {
  private _props: NewsProps;

  private constructor(props: NewsProps) {
    this._props = props;
  }

  static create(data: NewsProps) {
    return new News(data);
  }

  public isValid(): boolean {
    if (this._props.title === null || this._props.title === '') {
      return false;
    }
    return true;
  }

  get id() {
    return this._props.id;
  }

  get title() {
    return this._props.title;
  }
  
  get content() {
    return this._props.content;
  }
}
