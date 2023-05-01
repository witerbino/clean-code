export interface IUseCase<I = null, O = void> {
  execute(input: I | null): Promise<O | void>
}
