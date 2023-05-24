declare namespace OConfig {
  interface globalConfig {
    theme: string;
  }

  interface OpenAIParams<T> {
    prefix: string;
    dataType: T;
    suffix: string;
    question: string;
  }
}